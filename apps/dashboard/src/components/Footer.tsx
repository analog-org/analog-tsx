import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar, Footer } from "flowbite-react";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

const MainFooter: NextPage = () => {
  return (
    <div>
      <Footer container={true}>
        <Footer.Copyright href="#" by="Analog" year={new Date().getFullYear()} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Discord</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default MainFooter;
