import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer } from "flowbite-react";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

const Builder: NextPage = () => {
  return (
    <div>
      boys
    </div>
  );
};

export default Builder;
