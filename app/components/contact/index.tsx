import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const contactData = [
  {
    id: 1,
    text: "+254797153028",
    icon: "/c1.png",
  },
  {
    id: 2,
    text: "example@gmail.com",
    icon: "/c2.png",
  },
  {
    id: 3,
    text: "Karen, Nairobi, Kenya",
    icon: "/c3.png",
  },
  {
    id: 4,
    text: "Mon-Fri: 08.00 - 19.00, Sunday: Closed",
    icon: "/c4.png",
  },
  {
    id: 5,
    text: "Google Maps",
    icon: "/c5.png",
  },
];

const Contact = () => {
  return (
    <Box py="90px" bg="brand.lightBlue">
      <Stack mx="115px">
        <Heading
          color="brand.main"
          fontSize="15px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="22px"
          letterSpacing="5px"
        >
          LOCATION
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
          CONTACT US
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="100px" mt="20px">
          <Stack gap="23px">
            <Text
              fontSize="17px"
              fontWeight={400}
              lineHeight="26px"
              fontStyle="normal"
            >
              Hi, it is me Kiithya, Unleash Your Beauty Dreams! Contact Me for a
              Transformation That Speaks Louder Than Words. Let&apos;s Glam
              Together!
            </Text>
            <Stack>
              {contactData.map((item) => (
                <Flex key={item.id} gap="24px" align="center">
                  <Image src={item.icon} alt="icon" />
                  <Text fontSize="17px" fontWeight={400} fontStyle="normal">
                    {item.text}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Stack>
          <Stack gap="40px">
            <Heading
              color="brand.main"
              fontSize="15px"
              fontStyle="normal"
              lineHeight="22px"
              letterSpacing="5px"
              fontWeight={400}
            >
              GET IN TOUCH
            </Heading>
            <Flex gap={10}>
              <Input
                borderColor="rgba(26, 15, 15, 0.70)"
                variant="flushed"
                placeholder="Name*"
              />
              <Input
                borderColor="rgba(26, 15, 15, 0.70)"
                variant="flushed"
                placeholder="Email*"
              />
            </Flex>
            <Textarea
              variant="flushed"
              borderColor="rgba(26, 15, 15, 0.70)"
              placeholder="Message*"
            />
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
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Contact;
