import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box color="brand.white" pt="20px">
      <Flex align="center" justify="space-between" w="100%">
        <Image src="/logo.svg" alt="logo" />
        <Flex fontWeight={400} letterSpacing="0.6px" fontSize="20px" gap="38px">
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Pricing</Text>
          <Text>Portfolio</Text>
          <Text>Contact</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
