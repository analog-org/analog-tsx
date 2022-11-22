import { NextPage } from "next";
import { ReactNode } from "react";
import { useRouter } from "next/router";

 const Home: NextPage = () => {
  const router = useRouter();
  const { guildid } = router.query
  console.log(router.asPath);

  return (
    <div className="">
      
        {guildid}
      
    </div>
  );
};

export default Home;
