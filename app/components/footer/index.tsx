import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
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
];

const Footer = () => {
  return (
    <>
      <Box bg="brand.black" py="50px">
        <SimpleGrid
          mx={{ base: "20px", md: "70px", lg: "118px" }}
          columns={{ base: 1, sm: 2, md: 3 }}
          gap="99px"
        >
          <Stack>
            <Image mb="40px" w="177px" src="/f1.svg" alt="footer image 1" />
            <Stack gap="24px">
              <Text
                color="brand.white"
                fontSize="15px"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="26px"
              >
                Hi, it is me Kiithya, Unleash Your Beauty Dreams! Let&apos;s
                Glam Together!
              </Text>
              <Flex gap="16px">
                <Image boxSize="24px" src="/fb.png" alt="facebook" />
                <Image boxSize="24px" src="/ig.png" alt="instagram" />
                <Image boxSize="24px" src="/twitter.png" alt="twitter" />
              </Flex>
            </Stack>
          </Stack>
          <Stack>
            <Heading
              color="brand.main"
              fontSize="15px"
              fontWeight="400"
              fontStyle="normal"
              letterSpacing="5px"
              mb="40px"
            >
              GET IN TOUCH
            </Heading>
            <Stack gap="24px">
              {contactData.map((item) => (
                <Flex
                  key={item.id}
                  gap="24px"
                  color="brand.white"
                  align="center"
                >
                  <Image src={item.icon} alt="icon" />
                  <Text fontSize="17px" fontWeight={400} fontStyle="normal">
                    {item.text}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Stack>
          <Stack
            color="brand.white"
            fontWeight={400}
            lineHeight="26px"
            fontStyle="normal"
          >
            <Heading
              fontSize="15px"
              fontWeight={400}
              lineHeight="22px"
              letterSpacing="5px"
              fontStyle="normal"
              mb="40px"
            >
              OPENING HOURS
            </Heading>
            <Stack gap="24px">
              <Flex gap="32px">
                <Text>Mon-Friday:</Text>
                <Text>9am - 7pm</Text>
              </Flex>
              <Flex gap="32px">
                <Text>Saturday:</Text>
                <Text>9am - 7pm</Text>
              </Flex>
              <Flex gap="32px">
                <Text>Sunday:</Text>
                <Text>ByCall</Text>
              </Flex>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Box>
      <Flex
        align="center"
        borderTop="1px solid"
        borderColor="brand.white"
        py="12px"
        justify="center"
        bg="brand.black"
        px="12px"
      >
        <Text
          color="brand.white"
          fontSize="15px"
          fontStyle="normal"
          fontWeight={400}
          lineHeight="26px"
        >
          ©️ copyright 2023. All rights Reserved by Developer Wambui ❤️.
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
