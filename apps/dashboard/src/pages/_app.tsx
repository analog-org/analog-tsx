import "../../app/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Flowbite } from "flowbite-react";
import { customtheme as theme } from "../components/theme";
import Navbar from "../../app/Navbar";
import { NextPage } from "next";


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Flowbite theme={{ theme }}>
      <SessionProvider session={pageProps.session}>
        
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </Flowbite>
  );
}
