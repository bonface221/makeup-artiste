import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const MyServices = () => {
  return (
    <Box bg="brand.lightBlue" py="96px">
      <Stack mx="118px">
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
          fontSize="45px"
          lineHeight="22px"
          letterSpacing="3px"
          mb="58px"
        >
          MAKEUP SERVICES
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2 }}>
          {[1, 2].map((item) => (
            <Stack key={item} position="relative">
              <Image src="/s1.png" width={560} height={400} alt="service 1" />
              <Flex
                position="absolute"
                bottom={0}
                bg="brand.main"
                color="brand.black"
                transform="translateY(50%)"
                w="455px"
                h="100px"
                align="center"
                mx="50px"
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
