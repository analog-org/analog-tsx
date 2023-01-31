import Head from "next/head";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import perms from "../utils/bitfield";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import GuildContainer from "../components/Guild/GuildContainer";
import GuildCard from "../components/Guild/GuildCard";
import NavBar from "../components/Navbar";

const index: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="bg-gray-800">
        <NavBar />
        {"w you're signed in"}
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        {"l you're not signed in"}
      </div>
    );
  }
};

export default index;
