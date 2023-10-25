"use client";
import {
  Box,
  IconButton,
  Drawer as D,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "../..";

const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        as={RxHamburgerMenu}
        onClick={onOpen}
        w="30px"
        h="30px"
        color="brand.blue"
        bg="none"
        _hover={{ background: "none" }}
        aria-label="menu"
      />
      <D isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="brand.main">
          <DrawerCloseButton
            color="red"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontFamily="Poppins san-serif"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color="brand.white"
            >
              {navItems.map((nav) => (
                <Text
                  key={nav.name}
                  color="brand.white"
                  fontWeight="400"
                  _hover={{
                    color: "brand.dark",
                    cursor: "pointer",
                  }}
                >
                  {nav.name}
                </Text>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </D>
    </Box>
  );
};

export default Drawer;
