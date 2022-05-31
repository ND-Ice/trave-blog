import { Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Bookmarks() {
  return <Box>bookmarks</Box>;
}

Bookmarks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
