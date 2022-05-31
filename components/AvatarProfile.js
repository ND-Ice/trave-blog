import { Avatar, useColorModeValue } from "@chakra-ui/react";

export default function AvatarProfile({ size = "2xl", name, image }) {
  return (
    <Avatar
      size={size}
      showBorder
      borderWidth={10}
      borderColor={useColorModeValue("light", "dark")}
      name={name}
      src={image}
    />
  );
}
