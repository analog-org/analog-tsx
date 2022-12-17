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

const Home: NextPageWithLayout = ({
  guilds,
  botProfile,
  channels,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedChannel, setSelectedChannel] = useState("");
  const router = useRouter();
  const { guildid } = router.query;

  return (
    <div className="text-white">
      Guild Id: {guildid}
      <Builder botProfile={botProfile} rolesList={channels} />
      <div>
        {selectedChannel}
        <ChannelSelection channels={channels} onChange={(e) => setSelectedChannel(e.value)} selectedChannel={selectedChannel} />                        
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const guildId = context.query.guildid

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
        'Content-Type': 'application/json',
      },
      method: 'GET',
      
    }
  );

  const channels = await channelsFetch.json();
  console.log(guildId)
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
