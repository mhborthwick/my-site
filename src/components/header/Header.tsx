import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  ListItem,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

function getIconLink(iconType: IconType, url: string) {
  return (
    <Link href={url} isExternal display="block">
      <Icon as={iconType} boxSize={8} />
    </Link>
  );
}

enum URL {
  GITHUB = "https://github.com/mhborthwick",
  MAIL = "mailto:mhborthwick *at* gmail -dot- com",
  LINKED_IN = "https://www.linkedin.com/in/mhborthwick/",
}

function Header() {
  return (
    <Flex
      as="header"
      alignItems={"center"}
      paddingTop={"2rem"}
      paddingBottom={"2rem"}
    >
      <Box>
        <Heading as="h1">Mike Borthwick</Heading>
      </Box>
      <Spacer />
      <Box as="nav">
        <UnorderedList display={"flex"} listStyleType={"none"} gap={2}>
          <ListItem>{getIconLink(AiOutlineGithub, URL.GITHUB)}</ListItem>
          <ListItem>{getIconLink(AiOutlineMail, URL.MAIL)}</ListItem>
          <ListItem>{getIconLink(AiOutlineLinkedin, URL.LINKED_IN)}</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}

export default Header;
