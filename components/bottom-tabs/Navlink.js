import React from "react";
import NextLink from "next/link";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navlink({ href, icon }) {
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
}
