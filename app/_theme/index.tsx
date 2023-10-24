import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,

  components: {
    Heading: {
      baseStyle: {
        color: "brand.main",
        fontFamily: "'Oswald Variable', sans-serif",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "'Didact Gothic', sans-serif",
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
