import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const ServicesGrid = () => {
  return (
    <Box bg="brand.black">
      <SimpleGrid
        alignItems="center"
        columns={{ base: 1, sm: 2 }}
        mx={{ base: "50px", md: "100px", lg: "150px", xl: "240px" }}
        py="50px"
        gap={6}
      >
        <Flex>
          <Image src="/sm1.png" width={318} height={400} alt="services-image" />
        </Flex>
        <SimpleGrid columns={3} minH="200px">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Stack
              key={item}
              px="27px"
              align="center"
              py="18px"
              borderEnd="1px solid rgba(187,187,187,0.5)"
              borderBottom="1px solid rgba(187,187,187,0.5)"
            >
              <Image
                src="/sgrid1.png"
                width={30}
                height={28}
                alt="grid image"
              />
              <Text
                color="brand.white"
                fontSize="15px"
                fontWeight={400}
                lineHeight="30px"
                fontStyle="normal"
              >
                Facial Makeup
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default ServicesGrid;
