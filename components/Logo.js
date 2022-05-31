import NextLink from "next/link";
import { Heading, Show } from "@chakra-ui/react";

export default function Logo() {
  return (
    <>
      <Show above="md">
        <NextLink href="/">
          <Heading mb={5} w="full" textAlign="center" cursor="pointer">
            Tribubo
          </Heading>
        </NextLink>
      </Show>
      <Show below="md">
        <NextLink href="/">
          <Heading mb={5} cursor="pointer">
            T
          </Heading>
        </NextLink>
      </Show>
    </>
  );
}
