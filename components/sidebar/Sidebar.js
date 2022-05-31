import { signOut, useSession } from "next-auth/react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { FaHome, FaHashtag, FaBookmark } from "react-icons/fa";

import CreateButton from "./CreateButton";
import SideBarItem from "./SidebarItem";
import AvatarMenu from "./AvatarMenu";
import Logo from "../Logo";

export default function Sidebar() {
  const { data } = useSession();

  return (
    <Box
      pos="sticky"
      top={0}
      display={{ base: "none", sm: "block" }}
      borderRight="1px solid gray"
      h="100vh"
      p={{ base: "1rem", md: "1rem 3rem" }}
    >
      <Flex
        direction="column"
        h="full"
        align={{ base: "center", md: "flex-start" }}
        justify="space-between"
      >
        <Stack align={{ base: "center", md: "flex-start" }} gap={2}>
          <Logo />
          <SideBarItem href="/home" icon={FaHome}>
            Home
          </SideBarItem>
          <SideBarItem href="/explore" icon={FaHashtag}>
            Explore
          </SideBarItem>
          <SideBarItem href="/bookmarks" icon={FaBookmark}>
            Bookmarks
          </SideBarItem>
          <CreateButton />
        </Stack>
        <AvatarMenu
          name={data?.user?.name}
          userName="Nd-Ice"
          image={data?.user?.image}
          onSignOut={() => signOut({ callbackUrl: "/" })}
        />
      </Flex>
    </Box>
  );
}
