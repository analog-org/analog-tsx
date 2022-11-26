import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Sidebar } from "flowbite-react";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

const SideBar = () => {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          href="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
          img="favicon.png"
          imgAlt="Flowbite logo"
        >
          Analog
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
