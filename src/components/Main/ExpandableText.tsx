import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  console.log(children);
  if (children.length <= limit) return <Text>{children}</Text>;

  //   const summary = children.substring(0, limit);
  //   const summary = expanded
  //     ? children[0]
  //     : children[0].substring(0, limit) + ".......";

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        size="xs"
        marginLeft={1}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
