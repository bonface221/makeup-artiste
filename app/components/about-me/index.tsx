import { Box, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box
      bg="brand.secondary"
      py="96px"
      position="relative"
      _before={{
        content: `""`,
        position: "absolute",
        width: "85px",
        height: "2px",
        bottom: "0",
        transform: "rotate(90deg)",
        left: "50%",
        background: "brand.main",
      }}
    >
      <Flex
        flexDir={{ base: "column", md: "row" }}
        mx={{ base: "20px", md: "70px", lg: "118px" }}
        gap={{ base: "30px", md: "54px" }}
        align="center"
      >
        <Box flex={1}>
          <Image
            borderRadius="md"
            w="100%"
            height="fit-content"
            src="/about-me.png"
            alt="about-me"
          />
        </Box>
        <Stack flex={2} gap="24px">
          <Heading
            as="h4"
            fontSize="15px"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="22px"
            letterSpacing="5px"
          >
            About Me
          </Heading>
          <Heading
            as="h1"
            color="brand.black"
            fontSize="45px"
            fontStyle="normal"
            lineHeight="22px"
            fontWeight={400}
            letterSpacing="3px"
            position="relative"
            mb={4}
            _before={{
              content: `""`,
              position: "absolute",
              width: "85px",
              height: "2px",
              bottom: "-20px",
              left: 0,
              background: "brand.main",
            }}
          >
            IAN KIITHYA
          </Heading>
          <Stack
            color="brand.gray"
            fontSize="15px"
            fontStyle="normal"
            lineHeight="26px"
            gap="24px"
            fontWeight={400}
          >
            <Text>
              Hey there, I&apos;m Kiithya, a professional makeup artist breaking
              the norms. While makeup might seem like a female-dominated field,
              I&apos;ve carved my path with creativity and passion. My favorite
              color, a gentle and soothing light salmon pink, defines not only
              my style but also my perspective – a fusion of warmth and
              sophistication.
            </Text>
            <Text>
              Beyond the glitz and glamour, I find my joy in the simplest of
              activities. You&apos;ll often catch me at home, wrapped up in
              captivating docuseries. There&apos;s something about unraveling
              real stories that keeps me hooked and inspires my artistry.
            </Text>
            <Text>
              My brushes and palette are extensions of my imagination and skill.
              I turn faces into living, breathing works of art, each stroke
              telling a unique story. As a guy in the makeup world, I bring a
              fresh take, pushing boundaries and embracing the unexpected.
            </Text>
            <Text>
              So here&apos;s to embracing pink, creating beauty, and finding
              inspiration in the comfort of my home, one docuseries at a time.
              I&apos;m Kiithya – makeup artist, storyteller, and advocate for
              breaking stereotypes.
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AboutMe;
