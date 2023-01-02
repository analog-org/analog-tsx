import { NextPage } from "next";
import { ReactNode } from "react";
import GuildIcon from "./GuildIcon";
import Link from "next/link";
import GuildIconLG from "./GuildIconLG";
import { Button } from "flowbite-react";

type Props = {
  guildId: String;
  guildIcon: String | null;
  userDiscriminator: String | number;
  guildName: String;
  guildSetup: Boolean;
};

const GuildCard: NextPage<Props> = ({
  guildIcon,
  guildId,
  userDiscriminator,
  guildName,
  guildSetup,
}) => {
  if (guildSetup === true) {
    return (
      <Link href={`/dashboard/${guildId}`}>
        <div className="h-56 flex gap-4 flex-col w-72 sm:w-80 bg-black rounded-xl relative">
          <div className="py-2 pl-2 relative items-center justify-end overflow-hidden w-full h-full rounded-xl">
            <GuildIconLG
              guildIcon={guildIcon}
              guildId={guildId}
              userDiscriminator={userDiscriminator}
            />
          </div>
          <span className="absolute top-9 left-28 items-center justify-center">
            <GuildIcon
              guildIcon={guildIcon}
              guildId={guildId}
              userDiscriminator={userDiscriminator}
            />
          </span>
          <div className="flex flex-row justify-start">
            <h1 className="text-white flex-none font-helvetica font-bold text-xl px-2 pb-2">
              {guildName}
            </h1>
            <div className="flex-none">
            <Button href={`/dashboard/${guildId}`}>Manage</Button></div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
      >
        <div className="h-56 flex gap-4 flex-col w-72 sm:w-80 bg-black rounded-xl relative">
          <div className="py-2 pl-2 relative items-center justify-end overflow-hidden w-full h-full rounded-xl">
            <GuildIconLG
              guildIcon={guildIcon}
              guildId={guildId}
              userDiscriminator={userDiscriminator}
            />
          </div>
          <span className="absolute top-9 left-28 items-center justify-center">
            <GuildIcon
              guildIcon={guildIcon}
              guildId={guildId}
              userDiscriminator={userDiscriminator}
            />
          </span>
          <div className="flex flex-row justify-start">
            <h1 className="text-white flex-none font-helvetica font-bold text-xl px-2 pb-2">
              {guildName}
            </h1>
            <div className="flex-none">
            <Button color="light">Invite</Button></div>
          </div>
        </div>
      </Link>
    );
  }
};

export default GuildCard;
