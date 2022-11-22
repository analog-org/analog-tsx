import { NextPage } from "next";
import { ReactNode } from "react";
import GuildIcon from "./GuildIcon";
import Link from "next/link";

type Props = {
  guildId: String;
  guildIcon: String | null;
  userDiscriminator: String | number;
  guildName: String;
  guildSetup: Boolean;
};

const GuildCard: NextPage<Props> = ({ guildIcon, guildId, userDiscriminator, guildName, guildSetup }) => {
  if (guildSetup === true) {
    return (
      <Link
        href={`/dashboard/${guildId}`}
      >
        <div className="h-20 flex gap-4 flex-row w-auto bg-black rounded-xl  hover:-translate-y-1 hover:scale-110 border-green-600 border-4">
          <GuildIcon guildIcon={guildIcon} guildId={guildId} userDiscriminator={userDiscriminator}/>
          <h1 className="text-white font-helvetica font-bold text-3xl pt-4">
            {guildName} 
          </h1>
          
        </div>
      </Link>
    );
  } else {
    return (
      <a
        href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID}&permissions=8&scope=bot%20applications.commands`}
      >
        <div className="h-20 flex gap-4 flex-row w-auto bg-black rounded-xl  hover:-translate-y-1 hover:scale-110">
          <GuildIcon guildIcon={guildIcon} guildId={guildId} userDiscriminator={userDiscriminator}/>
          <h1 className="text-white font-helvetica font-bold text-3xl pt-4">
            {guildName} 
          </h1>
          
        </div>
      </a>
    );
  }
};

export default GuildCard;
