import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactTimeAgo from "react-time-ago";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

import PostImageGrid from "./PostImageGrid";
import ActionButton from "./bottom-tabs/ActionButton";

export default function Post({ post }) {
  return (
    <Box
      w="full"
      borderBottom="1px solid gray"
      bg={useColorModeValue("light", "dark")}
    >
      <Flex p={5} gap={2}>
        <Avatar
          size="md"
          name="Joshua Dela Cruz"
          src="https://bit.ly/code-beast"
          cursor="pointer"
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <div>
          <Heading size="md">Joshua Dela Cruz</Heading>
          <ReactTimeAgo date={post?._createdAt} timeStyle="twitter" />
        </div>
      </Flex>
      <Box p={2} px={5}>
        <Text mb={2}>{post?.caption}</Text>
      </Box>
      <PostImageGrid post={post} />
      <Flex p={2} gap={2} justify="space-between">
        <ActionButton icon={<FaThumbsUp />}>Like</ActionButton>
        <ActionButton icon={<FaComment />}>Comment</ActionButton>
        <ActionButton icon={<FaShare />}>Share</ActionButton>
      </Flex>
    </Box>
  );
}
