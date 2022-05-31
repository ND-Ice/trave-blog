import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Portal,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaArrowRight, FaUser } from "react-icons/fa";

export default function AvatarMenu({ name, userName, image, onSignOut }) {
  return (
    <Menu>
      <MenuButton>
        <Flex align="center" gap={3} cursor="pointer">
          <Avatar size="md" name={name} src={image}>
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Box display={{ base: "none", md: "block" }} textAlign="left">
            <Text>{name}</Text>
            <Text>{userName}</Text>
          </Box>
        </Flex>
      </MenuButton>
      <Portal>
        <MenuList bg={useColorModeValue("light", "dark")} p={2}>
          <NextLink href="/me">
            <MenuItem icon={<FaUser />}>My Account</MenuItem>
          </NextLink>
          <MenuItem icon={<FaArrowRight />} onClick={onSignOut}>
            Logout
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
}
