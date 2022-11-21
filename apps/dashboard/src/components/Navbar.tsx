import { NextPage } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const NavBar: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <Image
              src="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
              className="mr-5 h-6 sm:h-9 rounded-xl"
              alt="Flowbite Logo"
              width={36}
              height={36}
            />
            <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Analog
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Image
                  src={session.discordUser.image_url}
                  className="mr-5 h-6 sm:h-9 rounded-full"
                  alt="Flowbite Logo"
                  width={52}
                  height={52}
                />
              }
              placement="bottom-end"
            >
              
              <Dropdown.Header>
                <span className="block text-sm">
                  {session.discordUser.username}
                </span>
                <span className="block truncate text-sm font-medium">
                  {session.discordUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/dashboard" active={true}>
              Dashboard
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="/">
            <Image
              src="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
              className="mr-3 h-6 sm:h-9 rounded-xl"
              alt="Flowbite Logo"
              width={36}
              height={36}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Analog
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <p onClick={() => signIn()} className="text-white">
                  Sign in
                </p>
              }
            ></Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/dashboard" active={true}>
              Dashboard
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default NavBar;
