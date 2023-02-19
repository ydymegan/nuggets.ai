"use-client";

import { NavigationLayout } from "@/app/components/NavigationLayout";
import { useNuggetsToast } from "@/app/components/NuggetsToast";
import { theme } from "@/app/config/theme";
import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  GridItem,
  HStack,
  Image,
  Input,
  Radio,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Checkout() {
  const [hasSeenPrompt, setHasSeenPrompt] = useState<boolean>(false);
  const toast = useNuggetsToast();

  const handleOnClick = () => {
    if (!hasSeenPrompt) {
      toast({
        variant: "warning",
        description: `No special characters such as :<>/%#&?', are allowed`,
      });
      setHasSeenPrompt(true);
    }
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <NavigationLayout>
          <HStack spacing={4}>
            <Stack w="60%" px={4} spacing={3}>
              <Text textStyle="heading2" mb={4}>
                Contact Information
              </Text>
              <Input
                borderWidth="1px"
                backgroundColor="#FFF"
                borderRadius="16px"
                placeholder="Email"
                _placeholder={{
                  color: "rgba(0, 0, 0, 0.3)",
                }}
                _focus={{
                  borderColor: "#597161",
                  boxShadow: "0px 0px 0px 3px #a5b297 !important",
                  bg: "#FFF",
                }}
              />
              <HStack alignItems="flex-start" spacing={4}>
                <Radio isChecked />
                <Text textStyle="body">
                  I confirm that I wish to receive personalized electronic
                  communications containing information and promotions on Ulé
                  products, according to my preferences. My personal data will
                  be processed by BPI. You can unsubscribe from our
                  communications from the link in our emails. For more
                  information, see our privacy policy
                </Text>
              </HStack>
              <Text textStyle="heading2" mb={4}>
                Shipping Address
              </Text>
              <SimpleGrid columns={4} gap={4}>
                <GridItem colSpan={4}>
                  <Input
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="Country"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="First name"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="Last name"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={4}>
                  <Input
                    onClick={() => handleOnClick()}
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="Address"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={4}>
                  <Input
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="Apartment, suite, etc. (optional)"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="Postal code"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Input
                    borderWidth="1px"
                    backgroundColor="#FFF"
                    borderRadius="16px"
                    placeholder="City"
                    _placeholder={{
                      color: "rgba(0, 0, 0, 0.3)",
                    }}
                    _focus={{
                      borderColor: "#597161",
                      boxShadow: "0px 0px 0px 3px #a5b297 !important",
                      bg: "#FFF",
                    }}
                  />
                </GridItem>
                <GridItem colSpan={4}>
                  <Button
                    borderRadius="20px"
                    bgColor="#597161"
                    color="#FFF"
                    width="full"
                    _hover={{ bgColor: "#556246" }}
                    onClick={() => {}}
                  >
                    Continue to shippping
                  </Button>
                </GridItem>
              </SimpleGrid>
              <Divider />
            </Stack>
            <Box h="100vh">
              <Divider orientation="vertical" />
            </Box>
            <Image height="600" src="/checkout-side.png" alt="demo-product" />
          </HStack>
        </NavigationLayout>
      </ChakraProvider>
    </>
  );
}
