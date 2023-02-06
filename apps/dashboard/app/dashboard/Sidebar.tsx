"use client"

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Sidebar } from "flowbite-react";
import { authOptions } from "../../src/pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SideBar() {
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
            <Sidebar.Item href="/embed">Embed Builder</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};


