import Head from "next/head";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import perms from "../utils/bitfield"

const index: NextPage = ({
  guilds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <p>Guilds you can invite me to: </p>
        {
          guilds.map((gld) => {
            const serverPerms = perms(gld.permissions);
            if(serverPerms.includes('MANAGE_GUILD')){
              return (
                <div>{gld.name}</div>
              )
            }
          })
        }
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const guildFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const guilds = await guildFetch.json();
  
  console.log(session)
  return {
    props: {
      guilds,
    },
  };
};

export default index;
