import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";

import postApi from "../helper/post";
import { urlFor } from "../helper/client";
import ColorModeToggle from "../components/ColorModeToggle";
import AvatarProfile from "../components/AvatarProfile";
import MyPostsTab from "../components/MyPostsTab";
import Layout from "../components/Layout";

export default function Me({ posts }) {
  return (
    <Box>
      <Box h="200px" p="1rem" pos="relative" bg="gray">
        <Image
          src={urlFor(posts[0]?.image[0])?.url()}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <ColorModeToggle />
        <Box transform="translateY(50%)" pos="absolute" left="1rem" bottom="0">
          <AvatarProfile
            name="Joshua Dela Cruz"
            image="https://bit.ly/code-beast"
          />
        </Box>
        <Box pos="absolute" bottom="1rem" right="1rem">
          <CameraButton />
        </Box>
      </Box>
      <Box p="1rem" mt="4rem">
        <Text>ND-Ice</Text>
        <Heading>Joshua Dela Cruz</Heading>
        <Text>Aspiring Software Engineer</Text>
        <Text mt={5}>
          “When you have a dream, you've got to grab it and never let go.”
        </Text>
      </Box>

      {/* Recent posts */}
      <MyPostsTab posts={posts} />
    </Box>
  );
}

const CameraButton = () => (
  <IconButton
    icon={<FaCamera />}
    color="light"
    bg="accent.base"
    _active={{ bg: "accent.light" }}
    _hover={{
      bg: "accent.dark",
    }}
    _focus={{
      outline: "none",
    }}
  />
);

Me.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  try {
    const posts = await postApi.getPosts();
    return { props: { posts }, revalidate: 10 };
  } catch (error) {
    return {
      props: {
        hasError: true,
      },
    };
  }
};
