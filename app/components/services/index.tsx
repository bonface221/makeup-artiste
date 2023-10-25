import {
  Box,
  Image,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

const MyServices = () => {
  return (
    <Box bg="brand.lightBlue" py="96px">
      <Stack mx={{ base: "20px", md: "70px", lg: "118px" }}>
        <Heading
          as="h4"
          fontSize="15px"
          fontStyle="normal"
          lineHeight="22px"
          letterSpacing="5px"
          fontWeight="400"
          mb="30px"
        >
          What I Do
        </Heading>
        <Heading
          as="h1"
          color="brand.black"
          fontWeight={400}
          fontSize={{ base: "30px", sm: "45px" }}
          lineHeight="22px"
          letterSpacing="3px"
          mb="58px"
        >
          MAKEUP SERVICES
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {[1, 2].map((item) => (
            <Stack key={item} position="relative">
              <Image src="/s1.png" width="100%" height="100%" alt="service 1" />
              <Flex
                position="absolute"
                bottom={0}
                bg="brand.main"
                color="brand.black"
                transform="translateY(50%)"
                w="90%"
                h={{ base: "50px", md: "100px" }}
                align="center"
                mx="5%"
                zIndex={999}
              >
                <Text
                  ml="24px"
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight={400}
                >
                  Eye Makeup
                </Text>
              </Flex>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default MyServices;
