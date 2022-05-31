import { Box, Icon } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";
import styled from "@emotion/styled";

export default function BottomTabCreate() {
  return (
    <StyledBox
      bg="accent.base"
      color="light"
      _hover={{ bg: "accent.dark" }}
      _focus={{ outline: "none" }}
      _active={{ bg: "accent.light" }}
    >
      <Icon as={IoAdd} fontSize="2rem" />
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  width: 80px;
  height: 50px;
  display: grid;
  place-items: center;
  transition: all 300ms ease;
  cursor: pointer;
  border-radius: 1rem;
`;
