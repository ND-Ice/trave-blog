import { Text, Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function PopularPlace({ location, numOfVisits }) {
  return (
    <Box p=".5rem 0">
      <Heading as="h2" size="md">
        {location}
      </Heading>
      <Text color="gray.500">{numOfVisits} Visits</Text>
    </Box>
  );
}
