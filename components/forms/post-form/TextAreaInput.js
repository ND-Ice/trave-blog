import { Textarea } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import React, { forwardRef } from "react";

const TextAreaInput = forwardRef((props, ref) => {
  return (
    <Textarea
      minH="unset"
      overflow="hidden"
      w="full"
      resize="none"
      minRows={1}
      border={0}
      as={ResizeTextarea}
      ref={ref}
      {...props}
      _focus={{
        border: 0,
      }}
    />
  );
});

export default TextAreaInput;
