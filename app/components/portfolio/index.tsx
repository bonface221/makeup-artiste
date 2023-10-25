import { Box, Heading, SimpleGrid, Stack, Image } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Box px="115px" py="90px" bg="brand.secondary">
      <Stack>
        <Heading
          color="brand.main"
          fontSize="15px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="22px"
          letterSpacing="5px"
        >
          GALLERY
        </Heading>
        <Heading
          color="brand.dark"
          fontSize="45px"
          lineHeight="22px"
          letterSpacing="3px"
          fontWeight={400}
          fontStyle="normal"
          mb="58px"
          mt="24px"
          pos="relative"
          _after={{
            content: `""`,
            position: "absolute",
            width: "85px",
            height: "2px",
            bottom: "-25px",
            left: 0,
            background: "brand.main",
          }}
        >
          PORTFOLIO
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="24px">
          {new Array(12).fill("").map((p, index) => (
            <Stack
              key={index}
              h="fit-content"
              transition="all .3s ease-in-out"
              _hover={{
                boxShadow: "md",
                filter: "brightness(1.1)",
                cursor: "pointer",
              }}
            >
              <Image
                borderRadius="md"
                height="fit-content"
                boxShadow="sm"
                src={`/p${index + 1}.png`}
                alt="portfolio image"
              />
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Portfolio;
