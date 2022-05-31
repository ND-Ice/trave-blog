import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";

export default function MyPostsTab({ posts }) {
  return (
    <Tabs mt="1rem">
      <TabList>
        <Tab _focus={{ outline: "none" }}>Recent Posts</Tab>
        <Tab _focus={{ outline: "none" }}>All Posts</Tab>
        <Tab _focus={{ outline: "none" }}>All Photos</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>
          <Box display="grid" placeItems="center">
            {posts?.slice(0, 3)?.map((post) => (
              <Post key={post?._id} post={post} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel p={0}>
          <Box display="grid" placeItems="center">
            {posts?.slice(0, 10)?.map((post) => (
              <Post key={post?._id} post={post} />
            ))}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
