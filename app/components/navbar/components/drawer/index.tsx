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
const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "block", md: "none" }}>
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
        <DrawerContent bg="rgba(5, 86, 140, 1)">
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
              <Text
                _hover={{
                  color: "brand.main",
                  cursor: "pointer",
                }}
              >
                Home
              </Text>
              <Text
                as="a"
                _hover={{
                  color: "brand.main",
                  cursor: "pointer",
                }}
                onClick={onClose}
              >
                Services
              </Text>
              <Text
                as="a"
                _hover={{
                  color: "brand.main",
                  cursor: "pointer",
                }}
                onClick={onClose}
              >
                About
              </Text>
              <Text
                _hover={{
                  color: "brand.main",
                  cursor: "pointer",
                }}
                onClick={onClose}
                as="a"
              >
                Why Us
              </Text>
              <Text
                _hover={{
                  color: "brand.main",
                  cursor: "pointer",
                }}
                onClick={onClose}
                as="a"
              >
                Contact{" "}
              </Text>
              <Button
                _hover={{
                  background: "brand.bgMain",
                  color: "black",

                  transform: "scale(1.03)",
                }}
                order={3}
                color="brand.white"
                bg="brand.main"
                borderRadius="full"
              >
                Prime Sales System
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </D>
    </Box>
  );
};

export default Drawer;
