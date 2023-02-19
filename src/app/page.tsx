"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/theme";
import { Landing } from "./landing";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  );
}
