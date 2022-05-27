import { Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Icon
      cursor="pointer"
      fontSize="1.7rem"
      color={useColorModeValue("purple", "orange")}
      as={colorMode === "light" ? IoMoon : IoSunny}
      onClick={toggleColorMode}
    />
  );
}
