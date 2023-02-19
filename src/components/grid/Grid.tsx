import { SimpleGrid } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

function Grid({ children }: Props) {
  return (
    <SimpleGrid
      width="100%"
      spacing={4}
      columns={{ sm: 2, md: 4 }}
      paddingTop="2rem"
      paddingBottom="2rem"
      gridTemplateRows={{ sm: "1fr 1fr", md: "1fr" }}
    >
      {children}
    </SimpleGrid>
  );
}

export default Grid;
