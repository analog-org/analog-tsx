import { NextPage } from "next";
import Image from "next/image";

type Props = {
  guildId: String;
  guildIcon: String | null;
  userDiscriminator: number;
};

const GuildIcon: NextPage<Props> = ({ guildIcon, guildId, userDiscriminator }) => {
  return (
    <div className="py-2 pl-2">
      {guildIcon ? (
        <Image
          src={`https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.png`}
          width={64}
          height={64}
          className="rounded-xl"
          alt="Guild Icon"
        />
      ) : (
        <Image
          src={`https://cdn.discordapp.com/embed/avatars/${
            userDiscriminator % 5
          }.png`}
          width={64}
          height={64}
          className="rounded-xl"
          alt="Default Guild Icon" 
        />
      )}
    </div>
  );
};

export default GuildIcon;
