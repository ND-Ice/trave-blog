import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Explore() {
  return <Box>explore</Box>;
}

Explore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
