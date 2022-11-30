import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Sidebar } from "flowbite-react";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import getPages from "../utils/getPages";

const SideBar:NextPage = ({pages}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar with logo branding example" >
        <Sidebar.Logo
          href="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
          img="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
          imgAlt="Analog logo"
        >
          Analog
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
            {'fortnite'}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const pages = getPages('dashboard');
  console.log(pages)
  return {
    props: {
      pages
    },
  };
};

