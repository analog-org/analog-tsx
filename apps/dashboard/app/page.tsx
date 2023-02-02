import Head from "next/head";
import Image from "next/image";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { authOptions } from "../src/pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import perms from "../src/utils/bitfield";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import GuildContainer from "../src/components/Guild/GuildContainer";
import GuildCard from "../src/components/Guild/GuildCard";
import NavBar from "../src/components/Navbar";

export default function Page() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="bg-gray-800">
        
        {"w you're signed in"}
      </div>
    );
  } else {
    return (
      <div>
        
        {"l you're not signed in"}
      </div>
    );
  }
};

