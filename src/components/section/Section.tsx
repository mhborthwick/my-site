import { Box, Heading } from "@chakra-ui/react";

type Props = {
  heading: string;
};

function Section({ heading }: Props) {
  return (
    <Box paddingTop={"2rem"} paddingBottom={"2rem"}>
      <Heading as="h2" size="4xl">
        {heading.toUpperCase()}
      </Heading>
    </Box>
  );
}

export default Section;
