import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Flowbite } from "flowbite-react";
import { customtheme as theme } from "../components/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Flowbite theme={{ theme }}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Flowbite>
    </>
    
  );
}
