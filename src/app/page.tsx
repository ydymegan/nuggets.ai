"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Landing } from "./landing";

export default function Home() {
  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  );
}
