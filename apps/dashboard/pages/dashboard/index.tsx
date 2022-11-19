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
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
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
              <button onClick={() => signIn()} className="text-white">
                Sign in
              </button>
            }
          ></Dropdown>
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

  console.log(session);
  return {
    props: {
      guilds,
    },
  };
};

export default index;
