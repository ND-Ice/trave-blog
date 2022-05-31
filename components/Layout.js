import Head from "next/head";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import BottomTabs from "./bottom-tabs/BottomTabs";
import Sidebar from "./sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

export default function Layout({ children }) {
  return (
    <Flex
      bg={useColorModeValue("light", "dark")}
      p={{ base: "0 0 70px 0", sm: 0 }}
      m="auto"
      minH="100vh"
      maxW="1536px"
    >
      <Head>
        <title>Tribubo</title>
        <meta name="description" content="Share you travel experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Box flex={1.5} minH="100vh">
        {children}
      </Box>
      <Widgets />
      <BottomTabs />
    </Flex>
  );
}
