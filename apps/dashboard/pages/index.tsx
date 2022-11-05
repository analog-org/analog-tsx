import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const index:NextPage = () => {
  return (
    <div>
      Enter
    </div>
  );
}

export default index;