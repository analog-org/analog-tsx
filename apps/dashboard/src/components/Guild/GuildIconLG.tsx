import { NextPage } from "next";
import Image from "next/image";

type Props = {
  guildId: String;
  guildIcon: String | null;
  userDiscriminator: number;
};

const GuildIconLG: NextPage<Props> = ({
  guildIcon,
  guildId,
  userDiscriminator,
}) => {
  return (
    <>
      {guildIcon ? (
        <Image
          src={`https://cdn.discordapp.com/icons/${guildId}/${guildIcon}.png`}
          layout="fill"
          className="blur-md rounded-xl"
          alt="Guild Icon"
        />
      ) : (
        <Image
          src={`https://cdn.discordapp.com/embed/avatars/${
            userDiscriminator % 5
          }.png`}
          layout="fill"
          className="blur-md"
          alt="Default Guild Icon"
        />
      )}
    </>
  );
};

export default GuildIconLG;
