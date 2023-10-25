import { Box, Heading, Stack } from "@chakra-ui/react";

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
      </Stack>
    </Box>
  );
};

export default Portfolio;
