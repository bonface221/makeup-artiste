import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  fonts: {
    heading: "'Space Grotesk Variable', sans-serif",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "brand.main",
      },
    },
  },

  colors: {
    brand: {
      main: "#2E3192",
      white: "#ffff",
      red: "#e84c3d",
      black: "#000000",
      lightBlue: "#c2bede",
      lightBlack: "#262626",
      bg: "#F9F9F9",
    },
  },
});
