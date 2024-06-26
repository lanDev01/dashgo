import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alan Gonçalves</Text>
          <Text color="gray.300" fontSize="small">
            lnjnr9215@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alan Gonçalves"
        src="https://github.com/landev01.png"
      />
    </Flex>
  );
}
