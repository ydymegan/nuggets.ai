import { NavigationLayout } from "@/app/components/NavigationLayout";
import { theme } from "@/app/config/theme";
import { ChakraProvider, Text } from "@chakra-ui/react";

export default function Checkout() {
  return (
    <ChakraProvider theme={theme}>
      <NavigationLayout>
        <Text>checkout</Text>
      </NavigationLayout>
    </ChakraProvider>
  );
}
