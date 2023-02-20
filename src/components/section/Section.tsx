import {
  Box,
  Heading,
  LayoutProps,
  ThemeTypings,
  TypographyProps,
} from "@chakra-ui/react";

type Props = {
  heading: string;
  options: {
    size: ThemeTypings["components"]["Heading"]["sizes"];
    width: LayoutProps["width"];
    textAlign: TypographyProps["textAlign"];
  };
};

function Section({ heading, options }: Props) {
  return (
    <Box padding={"2rem"} width={options.width} textAlign={options.textAlign}>
      <Heading as="h2" size={options.size}>
        {heading}
      </Heading>
    </Box>
  );
}

export default Section;
