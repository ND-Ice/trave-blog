import { Button } from "@chakra-ui/react";

export default function PostButton({ children, ...otherProps }) {
  return (
    <Button
      type="solid"
      rounded="full"
      px={5}
      color="light"
      bg="accent.base"
      transition="all 300ms ease"
      {...otherProps}
      _hover={{ bg: "accent.dark" }}
      _active={{ bg: "accent.light" }}
      _focus={{ outline: "none" }}
    >
      {children}
    </Button>
  );
}
