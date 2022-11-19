import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GuildCard: NextPage<Props> = ({ children }) => {
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
              src={`https://cdn.discordapp.com/embed/avatars/${
                session.discordUser.discriminator % 5
              }.png`}
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
};

export default GuildCard;
