import { Box, useColorModeValue } from "@chakra-ui/react";

export default function me() {
  return (
    <Box p="1rem" minH="200vh" bg={useColorModeValue("light", "dark")}>
      me
    </Box>
  );
}
