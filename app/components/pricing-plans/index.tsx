import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const PricingPlan = () => {
  return (
    <Box
      bg="brand.lightBlue"
      py="90px"
      pos="relative"
      _before={{
        content: `""`,
        position: "absolute",
        width: "85px",
        height: "2px",
        bottom: "0",
        transform: "translate(-50%, -100%) rotate(90deg)",
        left: "50%",
        zIndex: 999,
        background: "brand.main",
      }}
    >
      <Stack mx={{ base: "10px", sm: "20px", md: "70px", lg: "118px" }}>
        <Heading
          color="brand.main"
          fontSize="15px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="22px"
          letterSpacing="5px"
        >
          PRICES
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
          position="relative"
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
          PRICING PLAN
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="24px">
          {[1, 2].map((item) => (
            <Flex
              borderRadius="md"
              overflow="hidden"
              key={item}
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 9,
                height: "100%",
                background: "rgba(26, 15, 15, 0.70)",
              }}
              bgImage="/prices-image.png"
              bgSize="cover"
              bgPos="center"
              py="83px"
              px={{ base: "15px", sm: "43px" }}
            >
              <Stack w="100%" zIndex={999} gap="40px">
                <Heading
                  color="brand.white"
                  fontSize="24px"
                  fontWeight={400}
                  letterSpacing="2px"
                >
                  General Prices:
                </Heading>
                <Stack gap="8px">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <PricesList key={item} name="Facial Makeup" price="50" />
                  ))}
                </Stack>
              </Stack>
            </Flex>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default PricingPlan;

function PricesList({ name, price }: { name: string; price: string }) {
  return (
    <Flex color="brand.white" align="center" gap={3}>
      <Text fontSize="15px" fontWeight={400} lineHeight="22px">
        {name}
      </Text>
      <Image
        src="/prices-line.svg"
        flex={{ base: 0, sm: 1 }}
        alt="prices-line"
      />
      <Text fontSize="15px" fontWeight={400} lineHeight="22px">
        ${price}
      </Text>
    </Flex>
  );
}
