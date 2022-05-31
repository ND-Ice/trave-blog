import {
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      gap={2}
      bg={useColorModeValue("purple.50", "orange.50")}
      w="max-content"
      fontWeight={800}
      borderRadius="2rem"
      align="center"
      color={useColorModeValue("purple", "orange")}
      cursor="pointer"
      onClick={toggleColorMode}
    >
      <IconButton
        fontSize="1.7rem"
        rounded="full"
        color={useColorModeValue("purple", "orange")}
        icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
        bg={useColorModeValue("purple.200", "orange.200")}
        _focus={{
          outline: "none",
        }}
      />
      <Text textTransform="uppercase" p="0 1rem 0 0">
        {colorMode === "light" ? "Dark" : "Light"}
      </Text>
    </Flex>
  );
}
