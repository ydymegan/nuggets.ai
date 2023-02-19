import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { useNuggetsToast } from "./NuggetsToast";

interface Props {}

export const NavigationLayout = ({ children }: PropsWithChildren<Props>) => {
  const toast = useNuggetsToast();

  const handleOnclick = () => {
    toast({
      variant: "error",
      description:
        "Did you want to get more information on the product? Click on the product name instead.",
    });
  };

  return (
    <Box w="100vw" overflowY="scroll" p={6} h="100vh">
      <Stack spacing={16} color="">
        <HStack spacing={6}>
          <Text
            textStyle="body"
            textTransform="uppercase"
            cursor="pointer"
            onClick={() => handleOnclick()}
          >
            Products
          </Text>
          <Text textStyle="body" textTransform="uppercase" cursor="pointer">
            Skin Diagnosis
          </Text>
          <Text textStyle="body" textTransform="uppercase" cursor="pointer">
            Eco-farm
          </Text>
          <Text textStyle="body" textTransform="uppercase" cursor="pointer">
            Store
          </Text>
          <Text textStyle="body" textTransform="uppercase" cursor="pointer">
            About us
          </Text>
        </HStack>
        {children}
      </Stack>
    </Box>
  );
};
