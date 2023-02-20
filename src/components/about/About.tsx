import { Box, Heading, Text, Image, Flex, Spacer } from "@chakra-ui/react";
import myHeadShot from "../../assets/headshot.png";
import { Scroll } from "../scroll";

export function About() {
  return (
    <Box>
      <Flex alignItems={"center"}>
        <Box flex={8} textAlign={"left"}>
          <Heading as="h2">Hello! 👋🏽</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            velit sapiente eveniet harum ut reiciendis temporibus optio dolorem
            amet libero ipsum dolor, nam, veritatis ab ea exercitationem quis
            alias illo.
          </Text>
        </Box>
        <Spacer />
        <Box position="relative" paddingLeft="2rem" paddingRight="2rem">
          <Image
            zIndex={2}
            boxSize="100px"
            src={myHeadShot}
            position="relative"
            borderRadius="full"
            alt="Mike Borthwick"
            boxShadow="10px 5px 5px #e2b6cd"
          />
        </Box>
      </Flex>
      <Flex alignItems={"center"} paddingTop="2rem" paddingBottom="2rem">
        <Scroll />
        <Text>Scroll</Text>
      </Flex>
    </Box>
  );
}

export default About;
