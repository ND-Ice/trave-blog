import { Box, useColorModeValue } from "@chakra-ui/react";

export default function explore() {
  return (
    <Box minH="200vh" p="1rem" bg={useColorModeValue("light", "dark")}>
      explore
    </Box>
  );
}
