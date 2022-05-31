import { Box, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box minW="100vh" minH="100vh" display="grid" placeItems="center">
      <Box display="grid" placeItems="center">
        <Spinner />
        <Text>Loading...</Text>
      </Box>
    </Box>
  );
}
