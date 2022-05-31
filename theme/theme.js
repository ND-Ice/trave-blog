import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    dark: "#000000",
    light: "#ffffff",
    accent: { base: "#1d9bf0", light: "#83cafa", dark: "#0168a8" },
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
