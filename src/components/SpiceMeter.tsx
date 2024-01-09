import { Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  spiceLevel: number;
}

const SpiceMeter = ({ spiceLevel }: Props) => {
  if (spiceLevel <= 4) return <Heading as="h2">Spice Level: Low</Heading>;

  if (spiceLevel <= 6) return <Heading as="h2">Spice Level: Moderate</Heading>;

  return (
    <Heading as="h2" marginTop={1}>
      Spice Level: High
    </Heading>
  );
};

export default SpiceMeter;
