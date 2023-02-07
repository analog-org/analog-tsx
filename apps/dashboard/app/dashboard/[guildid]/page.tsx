import { NextPage } from "next";
import { ReactNode } from "react";

export default function Home({ params }) {
  const { guildid } = params;

  return <div className="text-white">Guild Id: {guildid}</div>;
}
