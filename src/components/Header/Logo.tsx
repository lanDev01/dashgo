import React from "react";
import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="light"
      w="64"
    >
      dashgo
      <Text color="pink.500" ml="1" as="span">
        .
      </Text>
    </Text>
  );
}
