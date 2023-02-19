import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
interface Props {}

export const NavigationLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Box w="100vw" overflowY="scroll" p={6} h="100vh">
      <Stack spacing={16} color="">
        <HStack spacing={6}>
          <Text textStyle="body" textTransform="uppercase" cursor="pointer">
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
