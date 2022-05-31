import { getSession } from "next-auth/react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import postApi from "../helper/post";
import Post from "../components/Post";
import PostForm from "../components/forms/post-form";
import Layout from "../components/Layout";

export default function Home({ posts }) {
  return (
    <Box>
      <Box
        pos="sticky"
        top={0}
        p={5}
        zIndex="banner"
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
      >
        <Heading as="h2" fontSize="1.25rem" fontWeight={500}>
          Home
        </Heading>
      </Box>
      <PostForm />
      <Box display="grid" placeItems="center">
        {posts?.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
      </Box>
    </Box>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (context) => {
  try {
    const posts = await postApi.getPosts();
    const session = await getSession(context);

    if (!session) {
      return { redirect: { destination: "/", permanent: false } };
    }

    return { props: { posts, data: session } };
  } catch (error) {
    return { props: { hasError: true } };
  }
};
