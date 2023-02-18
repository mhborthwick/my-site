import { Box, Heading, Text, Image, Flex, Spacer } from "@chakra-ui/react";
import myHeadShot from "../../assets/headshot.png";
import { Scroll } from "../scroll";

function Circle() {
  const circleStyles = {
    zIndex: 1,
    top: "50%",
    left: "50%",
    width: "100px",
    height: "100px",
    background: "#f00",
    borderRadius: "50%",
    role: "presentation",
    transform: "translate(-30%, -30%)",
    position: "absolute" as "absolute", // https://github.com/microsoft/TypeScript/issues/11465#issuecomment-252453037
  };
  return <div style={circleStyles}></div>;
}

export function About() {
  return (
    <Box>
      <Flex alignItems={"center"}>
        <Box flex={3} textAlign={"left"}>
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
          />
          <Circle />
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
