import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "../navbar";
import LandingSection from "./components/landing-section";

const Hero = () => {
  return (
    <Flex
      bgImage="/hero-img.png"
      pos="relative"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      w="100%"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        height: "100%",
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <Stack
        gap={0}
        zIndex={999}
        w="100%"
        mx={{ base: "20px", md: "70px", lg: "118px" }}
      >
        <Navbar />
        <LandingSection />
      </Stack>
    </Flex>
  );
};

export default Hero;
