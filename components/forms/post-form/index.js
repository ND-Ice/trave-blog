import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FiImage, FiFile, FiActivity, FiMapPin } from "react-icons/fi";

import PostButton from "./PostButton";
import PrivacySettings from "./PrivacySettings";
import TextAreaInput from "./TextAreaInput";

export default function PostForm() {
  const [caption, setCaption] = useState("");
  const { data } = useSession();

  const handleChange = (e) => setCaption(e.target.value);
  return (
    <Flex p={5} pb={10} borderBottom="1px" borderColor="gray">
      <Avatar name={data?.user?.name} src={data?.user?.image} />
      <Box w="full">
        <TextAreaInput
          fontSize="1.25rem"
          placeholder="Whats on your mind?"
          onChange={handleChange}
        />
        <PrivacySettings />
        <Divider orientation="horizontal" w="full" />
        <Flex mt={3} align="center" justify="space-between">
          <HStack>
            <IconButton
              variant="ghost"
              rounded="full"
              icon={<FiImage />}
              _focus={{ outline: "none" }}
              Fima
            />
            <IconButton
              variant="ghost"
              rounded="full"
              icon={<FiFile />}
              _focus={{ outline: "none" }}
              Fima
            />
            <IconButton
              variant="ghost"
              rounded="full"
              icon={<FiActivity />}
              _focus={{ outline: "none" }}
              Fima
            />
            <IconButton
              variant="ghost"
              rounded="full"
              icon={<FiMapPin />}
              _focus={{ outline: "none" }}
              Fima
            />
          </HStack>
          <PostButton disabled={!caption} w="min-content">
            Post
          </PostButton>
        </Flex>
      </Box>
    </Flex>
  );
}
