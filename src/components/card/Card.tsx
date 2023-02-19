import {
  Card as _Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  heading: string;
  data: string[];
  icon: IconType;
};

function Card({ heading, data, icon }: Props) {
  return (
    <_Card>
      <CardHeader alignItems={"center"} display="flex" gap={2}>
        <Icon as={icon} boxSize={8} />
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
