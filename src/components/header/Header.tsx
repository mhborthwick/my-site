import {
  Box,
  Flex,
  Heading,
  ListItem,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";

function Header() {
  return (
    <Flex as="header" alignItems={"center"}>
      <Box>
        <Heading>Mike Borthwick</Heading>
      </Box>
      <Spacer />
      <Box as="nav">
        <UnorderedList display={"flex"} listStyleType={"none"} gap={2}>
          <ListItem>GitHub</ListItem>
          <ListItem>Mail</ListItem>
          <ListItem>LinkedIn</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}

export default Header;
