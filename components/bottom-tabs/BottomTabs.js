import NextLink from "next/link";
import { Avatar, Flex, useColorModeValue } from "@chakra-ui/react";
import { IoHome, IoBookmark } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import styled from "@emotion/styled";

import BottomTabCreate from "./BottomTabCreate";
import Navlink from "./Navlink";

export default function BottomTabs() {
  return (
    <StyledFlex
      justify="space-between"
      align="center"
      bg={useColorModeValue("light", "dark")}
      display={{ base: "flex", sm: "none" }}
    >
      <Navlink icon={IoHome} href="/" />
      <Navlink icon={FaHashtag} href="/explore" />
      <BottomTabCreate />
      <Navlink icon={IoBookmark} href="/bookmarks" />

      <NextLink href="/me">
        <Avatar
          size="sm"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
          cursor="pointer"
        />
      </NextLink>
    </StyledFlex>
  );
}

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 70px;
  padding: 1rem 1.5rem;
  position: fixed;
  bottom: 0;
`;
