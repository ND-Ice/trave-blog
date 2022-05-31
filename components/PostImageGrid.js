import Image from "next/image";
import { Grid, Box, GridItem } from "@chakra-ui/react";
import { urlFor } from "../helper/client";
import getColSpan from "../utils/getColspan";

const PostImageGrid = ({ post }) => (
  <Grid gridTemplateColumns="repeat(2,1fr)">
    {post?.image?.slice(0, 4)?.map((image, index) => (
      <GridItem
        pos="relative"
        key={index}
        colSpan={getColSpan(post, index)}
        minH={{ base: 250, sm: 300 }}
      >
        <ImageItem src={image} />
        <MoreImageOverLay post={post} index={index} />
      </GridItem>
    ))}
  </Grid>
);

export default PostImageGrid;

const ImageItem = ({ src }) => {
  return (
    <Box position="relative" w="100%" h="100%">
      <Image
        src={urlFor(src).url()}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  );
};

const MoreImageOverLay = ({ post, index }) => {
  return (
    post?.image?.length > 4 &&
    index == 3 && (
      <Box
        fontSize="4rem"
        fontWeight={700}
        pos="absolute"
        inset="0"
        display="grid"
        placeItems="center"
        color="light"
        bg="blackAlpha.700"
      >
        +{post?.image?.length - 4}
      </Box>
    )
  );
};
