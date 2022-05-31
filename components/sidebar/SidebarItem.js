import NextLink from "next/link";
import { Button, IconButton, Show } from "@chakra-ui/react";

export default function SideBarItem({ children, icon: Icon, href }) {
  return (
    <NextLink href={href}>
      <div>
        <Show above="md">
          <Button
            variant="ghost"
            leftIcon={<Icon />}
            iconSpacing={5}
            fontSize="1.4rem"
            p="1.8rem"
            size="lg"
            rounded="full"
            transition="all 300ms ease"
            _focus={{ outline: "none" }}
          >
            {children}
          </Button>
        </Show>
        <Show below="md">
          <IconButton
            variant="ghost"
            icon={<Icon />}
            size="lg"
            rounded="full"
            transition="all 300ms ease"
            _focus={{ outline: "none" }}
          />
        </Show>
      </div>
    </NextLink>
  );
}
