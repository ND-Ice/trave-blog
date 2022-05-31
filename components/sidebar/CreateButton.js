import { Box, Button, Icon, IconButton, Show } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

export default function CreateButton() {
  return (
    <Box w="full">
      <Show above="md">
        <Button
          bg="accent.base"
          type="solid"
          size="lg"
          rounded="full"
          w="100%"
          p="1.8rem"
          color="light"
          transition="all 300ms ease"
          _hover={{ bg: "accent.dark" }}
          _active={{ bg: "accent.light" }}
          _focus={{ outline: "none" }}
        >
          Create
        </Button>
      </Show>
      <Show below="md">
        <IconButton
          variant="solid"
          icon={<IoAdd />}
          bg="accent.base"
          size="lg"
          rounded="full"
          color="light"
          transition="all 300ms ease"
          _hover={{ bg: "accent.dark" }}
          _active={{ bg: "accent.light" }}
          _focus={{
            outline: "none",
          }}
        />
      </Show>
    </Box>
  );
}
