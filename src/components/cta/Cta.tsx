import { Box, Button, Link } from "@chakra-ui/react";

type Props = {
  text: string;
};

function Cta({ text }: Props) {
  return (
    <Box padding={"2rem"}>
      <Link href="mailto:mhborthwick *at* gmail -dot- com" isExternal>
        <Button size="lg" colorScheme="teal" variant="outline">
          {text}
        </Button>
      </Link>
    </Box>
  );
}

export default Cta;
