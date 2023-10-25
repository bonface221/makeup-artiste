import { Box, Flex, Image, Stack } from "@chakra-ui/react";
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
      _after={{
        content: `""`,
        position: "absolute",
        width: "70px",
        height: "2px",
        bottom: "0",
        transform: "translate(-50%, -100%) rotate(90deg)",
        left: "50%",
        zIndex: 999,
        background: "brand.main",
      }}
    >
      <Box
        pos="absolute"
        bottom={8}
        left="50%"
        transform="translate(-50%,-50%)"
      >
        <Image src="/fa-down.png" alt="fa-down" />
      </Box>

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
