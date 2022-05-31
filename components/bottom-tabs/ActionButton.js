import { Button } from "@chakra-ui/react";

export default function ActionButton({ icon, children }) {
  return (
    <Button
      leftIcon={icon}
      w={{ base: "auto", sm: "full" }}
      bg="none"
      _focus={{ outline: "none" }}
    >
      {children}
    </Button>
  );
}
