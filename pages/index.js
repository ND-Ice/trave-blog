import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession, signIn, useSession } from "next-auth/react";
import { Box, Button } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <Box minH="100vh" display="grid" placeItems="center">
      <Button
        leftIcon={<FaFacebook />}
        fontSize="1.25rem"
        p="2rem"
        onClick={() => signIn("facebook", { callbackUrl: "/home" })}
      >
        Continue with Facebook
      </Button>
    </Box>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return { props: { data: session } };
};
