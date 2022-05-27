import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minH="200vh" p="1rem" bg={useColorModeValue("light", "dark")}>
      home
    </Box>
  );
}
