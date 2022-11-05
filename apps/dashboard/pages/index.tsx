import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const index: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default index;
