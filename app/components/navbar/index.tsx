import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box color="brand.white" py="20px">
      <Flex align="center" justify="space-between" w="100%">
        <Image src="/logo.svg" alt="logo" />
        <Flex
          fontWeight={400}
          transition="all .3s ease-in-out"
          letterSpacing="0.6px"
          fontSize="20px"
          gap="38px"
        >
          <Text
            cursor="pointer"
            _hover={{
              color: "brand.main",
            }}
          >
            Home
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "brand.main",
            }}
          >
            About
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "brand.main",
            }}
          >
            Services
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "brand.main",
            }}
          >
            Pricing
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "brand.main",
            }}
          >
            Portfolio
          </Text>
          <Text
            cursor="pointer"
            _hover={{
              color: "brand.main",
            }}
          >
            Contact
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
