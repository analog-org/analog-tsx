import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from '../../_app'
import DashboardLayout from "../../../layouts/Dashboard";
import Builder from "../../../components/EmbedBuilder/Builder";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";

 const Home: NextPageWithLayout = ({
  guilds,
  botProfile,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { guildid } = router.query
  console.log(router.asPath);

  return (
    <div className="text-white">
      
        Guild Id: {guildid}
        <Builder botProfile={botProfile} />
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
  const botProfileFetch = await fetch(
    `https://discord.com/api/v10/users/@me`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    }
  );
  const botProfile: user = await botProfileFetch.json();
  
  return {
    props: {
      guilds,
      botProfile,
    },
  };
};

export default Home;

Home.getLayout = function getLayout(page:React.ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}