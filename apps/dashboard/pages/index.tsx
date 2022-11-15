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
import perms from "../utils/bitfield";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const index: NextPage = ({
  guilds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="bg-gray-800">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
              className="mr-3 h-6 sm:h-9 rounded-xl"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Analog
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={session.discordUser.image_url}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {session.discordUser.username}
                </span>
                <span className="block truncate text-sm font-medium">
                  {session.discordUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/dashboard" active={true}>
              Dashboard
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>

        <div className=" px-4 py-8 mx-auto sm:px-6 lg:px-8 rounded-xl flex flex-col sm:flex-row flex-initial flex-wrap">
          <div className="flex flex-col gap-8 rounded-xl lg:grid lg:grid-row lg:grid-cols-4 xl:grid-cols-5">
            {guilds.map((gld: guild) => {
              const serverPerms = perms(gld.permissions);
              if (serverPerms.includes("MANAGE_GUILD")) {
                return (
                  <a
                    href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
                  >
                    <div className="h-20 flex gap-4 flex-row w-auto bg-black rounded-xl  hover:-translate-y-1 hover:scale-110">
                      <div className="py-2 pl-2">
                        {gld.icon ? ( 
                          <Image
                            src={`https://cdn.discordapp.com/icons/${gld.id}/${gld.icon}.png`}
                            width={64}
                            height={64}
                            className="rounded-xl"
                          />
                        ) : (
                          <Image
                            src={`https://cdn.discordapp.com/embed/avatars/${session.discordUser.discriminator % 5}.png`}
                            width={64}
                            height={64}
                            className="rounded-xl"
                          />
                        )}
                      </div>
                      <h1 className="text-white font-helvetica font-bold text-3xl pt-4">
                        {gld.name}
                      </h1>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
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

  console.log(session);
  return {
    props: {
      guilds,
    },
  };
};

export default index;
