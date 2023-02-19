import { Box, Heading } from "@chakra-ui/react";

type Props = {
  data: string;
};

function Section({ data }: Props) {
  return (
    <Box paddingTop={"2rem"} paddingBottom={"2rem"}>
      <Heading as="h2" size="4xl">
        {data.toUpperCase()}
      </Heading>
    </Box>
  );
}

export default Section;
