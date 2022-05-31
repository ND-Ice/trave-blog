import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import postApi from "../../helper/post";
import { urlFor } from "../../helper/client";

export default function Widgets() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getRecentPosts();
  }, []);

  const getRecentPosts = async () => {
    try {
      const posts = await postApi.getPosts();
      setRecentPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledBox
      display={{ base: "none", xl: "block" }}
      borderLeft="1px solid gray"
    >
      <Heading as="h1" size="lg" mb={10}>
        Recent Photos
      </Heading>
      <Grid gridTemplateColumns="repeat(2, 1fr)" gap={1}>
        {recentPosts?.slice(0, 6)?.map((post) => (
          <GridItem key={post?._id} pos="relative" w="full" h="150px">
            <Image
              src={urlFor(post?.image[0]).url()}
              objectPosition="center"
              objectFit="cover"
              layout="fill"
            />
          </GridItem>
        ))}
      </Grid>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  min-height: 100vh;
  max-height: 100vh;
  padding: 1rem 2rem;
  flex: 1;
  position: sticky;
  top: 0;
`;
