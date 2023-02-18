import { Box, Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

function Main({ children }: Props) {
  const mainStyles = {
    flexDirection: "column" as "column", // https://github.com/microsoft/TypeScript/issues/11465#issuecomment-252453037
    border: "2px solid red",
    placeItems: "center",
    maxWidth: "960px",
    margin: "auto",
  };
  return (
    <Flex as="main" style={mainStyles}>
      {children}
    </Flex>
  );
}

export default Main;
