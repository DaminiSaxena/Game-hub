import { Badge } from "@chakra-ui/react";
import React from "react";

interface props {
  critic: number;
}

export const Metacritic = ({ critic }: props) => {
  const color = critic > 85 ? "green" : critic > 60 ? "yellow" : "red";
  return (
    <Badge className="score" colorScheme={color} paddingX={2} fontSize={14}>
      {critic}
    </Badge>
  );
};
