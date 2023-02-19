"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Landing } from "./components/landing";
import { theme } from "./config/theme";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  );
}
