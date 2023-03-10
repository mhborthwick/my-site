import { Box, Flex, Heading, Spacer, Image } from "@chakra-ui/react";

type Props = {
  heading: string;
  children: React.ReactNode;
  img: any;
  reverse?: boolean;
};

function Project({ heading, children, img, reverse }: Props) {
  return (
    <Flex
      alignItems={"center"}
      paddingTop="2rem"
      paddingBottom="2rem"
      flexDirection={reverse ? "row-reverse" : "initial"}
    >
      <Box maxWidth="300px" paddingLeft="2rem" paddingRight="2rem">
        <Image
          src={img}
          borderRadius="lg"
          alt="Manage Songs page on songbook app"
          boxShadow="10px 5px 5px #e2b6cd"
        />
      </Box>
      <Spacer />
      <Box flex={8} textAlign="left" paddingLeft={"2rem"} paddingRight={"2rem"}>
        <Heading as="h3">{heading}</Heading>
        {children}
      </Box>
    </Flex>
  );
}

export default Project;
