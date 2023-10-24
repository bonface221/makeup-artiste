import { Button, Flex, Heading, Stack } from "@chakra-ui/react";

const LandingSection = () => {
  return (
    <Flex h="88vh">
      <Stack gap="50px">
        <Heading
          as="h3"
          color="brand.main"
          fontSize="15px"
          letterSpacing="6.6px"
          lineHeight="22px"
          fontWeight={400}
          fontStyle="normal"
        >
          Makeup Artist
        </Heading>
        <Heading
          as="h1"
          color="brand.white"
          fontSize="70px"
          lineHeight="26px"
          letterSpacing="12.6px"
          fontWeight={400}
          fontStyle="normal"
        >
          IAN KIITHYA
        </Heading>
        <Button
          w="116px"
          borderRadius="none"
          bg="brand.main"
          color="brand.white"
          p="12px 32px"
        >
          About Me
        </Button>
      </Stack>
    </Flex>
  );
};

export default LandingSection;
