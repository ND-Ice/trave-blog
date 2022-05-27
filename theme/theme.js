import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    dark: "black",
    light: "white",
    accent: "#1d9bf0",
  },
  styles: {
    global: {
      body: {
        bg: mode("white", "black"),
        color: mode("black", "white"),
      },
    },
  },
};

export default extendTheme(config);
