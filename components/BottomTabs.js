import NextLink from "next/link";
import { Avatar, Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";
import { IoHome, IoMap, IoAdd } from "react-icons/io5";
import ColorModeToggle from "../components/ColorModeToggle";
import { useRouter } from "next/router";

export default function BottomTabs() {
  return (
    <Flex
      w="full"
      h="60px"
      p="1rem 1rem 1.5rem 1rem"
      justify="space-between"
      align="flex-end"
      pos="fixed"
      bottom="0"
      bg={useColorModeValue("light", "dark")}
      display={{ base: "flex", md: "none" }}
    >
      <Navlink icon={IoHome} href="/" />
      <Navlink icon={IoMap} href="/explore" />
      <CreateButton />
      <ColorModeToggle />
      <NextLink href="/me">
        <Avatar
          size="sm"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
          cursor="pointer"
        />
      </NextLink>
    </Flex>
  );
}

const Navlink = ({ href, icon }) => {
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <NextLink href={href}>
      <Icon
        as={icon}
        fontSize="1.7rem"
        cursor="pointer"
        color={active ? "accent" : useColorModeValue("dark", "light")}
        transition="all 300ms ease"
        _hover={{
          color: "accent",
        }}
      />
    </NextLink>
  );
};

const CreateButton = () => (
  <Box
    w="60px"
    h="60px"
    display="grid"
    placeItems="center"
    bg="accent"
    borderRadius="full"
    transform="translateY(-5px)"
    cursor="pointer"
    transition="all 300ms ease"
    color="white"
    _hover={{
      bg: darken("accent", 10),
    }}
  >
    <Icon as={IoAdd} fontSize="2rem" />
  </Box>
);
