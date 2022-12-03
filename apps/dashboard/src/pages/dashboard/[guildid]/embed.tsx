import { NextPage } from "next";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from '../../_app'
import DashboardLayout from "../../../layouts/Dashboard";
import Builder from "../../../components/EmbedBuilder/Builder";

 const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const { guildid } = router.query
  console.log(router.asPath);

  return (
    <div className="text-white">
      
        Guild Id: {guildid}
        <Builder />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page:React.ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}