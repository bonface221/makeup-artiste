import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  fonts: {
    heading: "'Oswald Variable', sans-serif",
    text: "'Didact Gothic', sans-serif",
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
      main: "#FF9999",
      white: "#FFF5F5",
      black: "#1A0F0F",
      gray: "#BBBBBB",
      lightBlue: "#F0F0F0",
    },
  },
});
