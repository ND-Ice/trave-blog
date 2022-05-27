import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

import ColorModeToggle from "./ColorModeToggle";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      p="1rem"
      pos="sticky"
      top={0}
      justify="space-between"
      align="center"
      bg={useColorModeValue("light", "dark")}
      backdropFilter="blur(10px)"
      shadow="sm"
    >
      <Heading fontSize="1.2rem">Tribubo</Heading>
      <ColorModeToggle />
    </Flex>
  );
}
