import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "../../_app";
import DashboardLayout from "../../../layouts/Dashboard";
import Builder from "../../../components/EmbedBuilder/Builder";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import ChannelSelection from "../../../components/Selection/ChannelSelection/ChannelSelection";
import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";

interface EmbedState {
  author: {
    name: string;
    url: string;
    icon_url: string;
  };
  title: string;
  description: string;
  color: string;
  url: string;
  thumbnail: {
    url: string;
  };
  image: {
    url: string;
  };
}

const Home: NextPageWithLayout = ({
  guilds,
  botProfile,
  channels,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedChannel, setSelectedChannel] = useState("");
  const [embed, setEmbed] = useState<EmbedState>({
    author: {
      name: "",
      url: "",
      icon_url: "",
    },
    title: "",
    description: "",
    color: "",
    url: "",
    thumbnail: {
      url: "",
    },
    image: {
      url: "",
    },


  });

  const router = useRouter();
  const { guildid } = router.query;

  const { data: session } = useSession();

  const sendEmbed = async () => {
    try {
      const res = await fetch("/api/discord/postEmbed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embed,
          selectedChannel,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(
    `https://discord.com/api/v10/guilds/${guildid}/channels/${selectedChannel}/messages`
  );

  return (
    <div className="text-white">
      Guild Id: {guildid}
      <Builder
        botProfile={botProfile}
        author={{
          name: embed.author.name,
          updateName(name) {
            setEmbed({ ...embed, author: { ...embed.author, name } });
          },
          url: embed.author.url,
          updateUrl(url) {
            setEmbed({ ...embed, author: { ...embed.author, url } });
          },
          icon_url: embed.author.icon_url,
          updateIconUrl(icon_url) {
            setEmbed({ ...embed, author: { ...embed.author, icon_url } });
          },
        }}
        title={embed.title}
        updateTitle={(title) => setEmbed({ ...embed, title })}
        description={embed.description}
        updateDescription={(description) => setEmbed({ ...embed, description })}
        color={embed.color}
        updateColor={(color) => setEmbed({ ...embed, color })}
        url={embed.url}
        updateUrl={(url) => setEmbed({ ...embed, url })}
        thumbnail={{
          url: embed.thumbnail.url,
          updateUrl(url) {
            setEmbed({ ...embed, thumbnail: { ...embed.thumbnail, url } });
          },
        }}
        image={{
          url: embed.image.url,
          updateUrl(url) {
            setEmbed({ ...embed, image: { ...embed.image, url } });
          },
        }}
      />
      <div>
        {selectedChannel}
        <ChannelSelection
          channels={channels}
          onChange={(e) => setSelectedChannel(e.value)}
          selectedChannel={selectedChannel}
        />
      </div>
      <div>
        <Button onClick={sendEmbed}>Send Embed</Button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const guildId = context.query.guildid;

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
  const botProfileFetch = await fetch(`https://discord.com/api/v10/users/@me`, {
    headers: {
      // @ts-ignore
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    },
  });
  const botProfile: user = await botProfileFetch.json();

  const channelsFetch = await fetch(
    `https://discord.com/api/v10/guilds/${guildId}/channels`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );

  const channels = await channelsFetch.json();
  console.log(guildId);
  return {
    props: {
      guilds,
      botProfile,
      channels,
    },
  };
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
