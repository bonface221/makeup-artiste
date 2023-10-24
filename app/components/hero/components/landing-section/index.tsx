import { Button, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";

const LandingSection = () => {
  return (
    <Grid h="85vh" templateRows="repeat(5, 1fr)">
      <GridItem gridRowStart={2}>
        <Stack gap="50px">
          <Heading
            as="h3"
            color="brand.main"
            fontSize="15px"
            letterSpacing="6.6px"
            lineHeight="22px"
            fontWeight={400}
            fontStyle="normal"
            position="relative"
            _before={{
              content: `""`,
              position: "absolute",
              width: "85px",
              height: "2px",
              top: "-24px",
              left: 0,
              background: "brand.main",
            }}
          >
            Makeup Artist
          </Heading>
          <Heading
            as="h1"
            color="brand.white"
            fontSize="70px"
            lineHeight="26px"
            letterSpacing="12.6px"
            fontWeight={400}
            fontStyle="normal"
          >
            IAN KIITHYA
          </Heading>
          <Button
            w="116px"
            borderRadius="none"
            bg="brand.main"
            color="brand.white"
            transition="all 0.3s ease-in-out"
            p="12px 32px"
            _hover={{
              bg: "brand.white",
              color: "brand.main",
            }}
          >
            About Me
          </Button>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default LandingSection;
