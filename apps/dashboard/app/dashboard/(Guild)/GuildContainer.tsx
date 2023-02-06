"use client"

import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

export default function GuildContainer ({ children }: Props) {
  return (
    <div className=" px-4 py-8 mx-auto sm:px-6 lg:px-8 rounded-xl flex flex-col sm:flex-row flex-initial flex-wrap justify-center">
      <div className="flex flex-col gap-8 rounded-xl sm:grid sm:grid-cols-2 sm:grid-row lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
};
