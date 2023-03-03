"use client";

import { Avatar, Dropdown, Sidebar } from "flowbite-react";
import Link from "next/link";

/* interface Props {
  pages: string[]
} */
export default function SideBar({ pages, id }) {
  const balls = ["embed", "test", "test2", "test3"];
  return (
    <div className="w-fit rounded-none">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          href="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
          img="https://avatars.githubusercontent.com/u/110413696?s=200&v=4"
          imgAlt="Analog logo"
          className="rounded-full"
        >
          Analog
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href={`../${id}`}>Dashboard</Sidebar.Item>
            {pages.map((page) => (
              <Link href={`/dashboard/${id}/${page}`}>
                <div className="flex text-left  rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-800">
                  <p className=" px-3">{page}</p>
                </div>
              </Link>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}