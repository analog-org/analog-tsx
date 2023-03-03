import MainFooter from "./Footer";
import NavBar from "../../Navbar";
import SideBar from "./Sidebar";
import { ReactNode } from "react";
import DashNavbar from "./DashNav";
import path from "node:path";
import { authOptions } from "../../../src/pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import fs, { read, readdirSync } from "fs";
import perms from "../../../src/utils/bitfield";
import { APIGuild } from "discord-api-types/v10";

const filelist = path.join(process.cwd(), "app/dashboard/[guildid]");
const componentFiles = fs
  .readdirSync(filelist)
  .filter((file) => !file.endsWith(".tsx"));
const components = [];
for (const file of componentFiles) {
  components.push(file);
}

export default async function DashboardLayout({ children, params }) {
  const { guildid } = params;

  const session = await getServerSession(authOptions);

  const guildFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const guilds: APIGuild[] = await guildFetch.json();

  const botGuildsFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    }
  );
  const botGuilds: APIGuild[] = await botGuildsFetch.json();

  const userGuilds: APIGuild[] = [];

  if (Array.isArray(guilds)) {
    guilds.map((gld: APIGuild) => {
      const serverPerms = perms(gld.permissions);
      if (serverPerms.includes("MANAGE_GUILD")) {
        if (botGuilds.some((botGuild: APIGuild) => botGuild.id === gld.id)) {
          userGuilds.push(gld);
        }
      }
    });
  }

  if (userGuilds.some((userGld: APIGuild) => userGld.id === guildid)) {
    return (
      <div className="bg-zinc-800">
        <DashNavbar />
        <div className="flex">
          <SideBar pages={components} id={guildid} />
          <div className="flex-grow p-6">{children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-zinc-800">
        <DashNavbar />
        <div className="flex">
          <SideBar pages={components} id={guildid} />
          <div className="flex-grow p-6">
            You are not in this guild or you do not have admin access
          </div>
        </div>
      </div>
    );
  }
}