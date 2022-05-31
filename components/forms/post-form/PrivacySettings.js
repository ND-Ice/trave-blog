import { Button } from "@chakra-ui/react";
import { FaGlobeAsia } from "react-icons/fa";

export default function PrivacySettings() {
  return (
    <Button
      type="unstyled"
      leftIcon={<FaGlobeAsia />}
      w="min-content"
      p={0}
      bg="none"
      color="accent.base"
      _hover={{ bg: "none" }}
      _focus={{ outline: "none" }}
      _active={{ bg: "none" }}
    >
      Public
    </Button>
  );
}
