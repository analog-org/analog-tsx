import Head from "next/head";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import perms from "../../utils/bitfield";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import GuildContainer from "../../components/Guild/GuildContainer";
import GuildCard from "../../components/Guild/GuildCard";

const Home: NextPage = ({
  guilds,
  botGuilds,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <GuildContainer>
          {guilds.map((gld: guild) => {
            const serverPerms = perms(gld.permissions);
            if (serverPerms.includes("MANAGE_GUILD")) {
              return (
                <GuildCard
                  guildIcon={gld.icon}
                  guildId={gld.id}
                  userDiscriminator={session.discordUser.discriminator}
                  guildName={gld.name}
                  guildSetup={botGuilds.some((botGuild) => botGuild.id === gld.id)}
                />
              );
            }
          })}
        </GuildContainer>
      </div>
    );
  }
  return (
    <div>
      <h1>Not signed in</h1>
    </div>
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
  const botGuildsFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    }
  );
  const botGuilds = await botGuildsFetch.json();
  
  return {
    props: {
      guilds,
      botGuilds,
    },
  };
};

export default Home;

