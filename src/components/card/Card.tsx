import {
  Button,
  Card as _Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

type Props = {
  heading: string;
  data: string[];
};

function Card({ heading, data }: Props) {
  return (
    <_Card>
      <CardHeader>
        <Heading size="md">{heading}</Heading>
      </CardHeader>
      <CardBody>
        <UnorderedList gap={2} textAlign={"left"}>
          {data.map((d, i) => (
            <ListItem key={i}>{d}</ListItem>
          ))}
        </UnorderedList>
      </CardBody>
    </_Card>
  );
}

export default Card;
