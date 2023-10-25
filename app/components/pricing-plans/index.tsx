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
    <Box bg="brand.lightBlue" py="90px">
      <Stack mx="118px">
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
        >
          PRICING PLAN
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px">
          {[1, 2].map((item) => (
            <Flex
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
              px="43px"
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
      <Image src="/prices-line.svg" flex={1} alt="prices-line" />
      <Text fontSize="15px" fontWeight={400} lineHeight="22px">
        ${price}
      </Text>
    </Flex>
  );
}
