import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Drawer from "./components/drawer";

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <Box color="brand.white" py="20px">
      <Flex align="center" justify="space-between" w="100%">
        <Image src="/logo.svg" alt="logo" />
        <Flex
          fontWeight={400}
          display={{ base: "none", lg: "flex" }}
          transition="all .3s ease-in-out"
          letterSpacing="0.6px"
          fontSize="20px"
          gap="38px"
        >
          {navItems.map((nav) => (
            <Text
              key={nav.name}
              cursor="pointer"
              _hover={{
                color: "brand.main",
              }}
            >
              {nav.name}
            </Text>
          ))}
        </Flex>
        <Box display={{ base: "block", lg: "none" }}>
          <Drawer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
