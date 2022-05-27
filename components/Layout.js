import Head from "next/head";
import { Box } from "@chakra-ui/react";
import BottomTabs from "./BottomTabs";

export default function Layout({ children }) {
  return (
    <Box minHeight="100vh" maxWidth="1536px" pos="relative" m="auto">
      <Head>
        <title>Tribubo</title>
        <meta name="description" content="Share you travel experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <BottomTabs />
    </Box>
  );
}
