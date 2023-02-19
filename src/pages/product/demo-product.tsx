"use-client";

import { NavigationLayout } from "@/app/components/NavigationLayout";
import { theme } from "@/app/config/theme";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  ChakraProvider,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNuggetsToast } from "@/app/components/NuggetsToast";
import { delay } from "framer-motion";

export default function DemoProduct() {
  const router = useRouter();
  const toast = useNuggetsToast();

  const handleOnClick = () => {
    setTimeout(() => {
      toast({
        variant: "info",
        description:
          "If you'd like to purchase, you can add this item to your cart and checkout",
      });
    }, 7000);
  };

  return (
    <ChakraProvider theme={theme}>
      <NavigationLayout>
        <SimpleGrid columns={2} gap={6}>
          <GridItem>
            <Image
              height="700"
              width="700"
              src="/product-2.png"
              alt="demo-product"
              onClick={handleOnClick}
            />
          </GridItem>
          <GridItem>
            <Stack spacing={4}>
              <Stack spacing={0}>
                <Text
                  textStyle="body"
                  fontStyle="italic"
                  fontSize="28px"
                  fontWeight="700"
                >
                  Avoir it all
                </Text>
                <Text
                  textStyle="body"
                  textTransform="uppercase"
                  fontSize="14px"
                >
                  IN & OUT NURTURING PHYTO OIL
                </Text>
              </Stack>
              <Text textStyle="body" mt={2}>
                This oil does it all. A nourishing oil that can be applied on
                skin and/or ingested (10 drops/day = 5ml), to bring comfort and
                suppleness for a more radiant complexion. Skin will be nourished
                from the inside and outside, and appear stronger and
                revitalized.
              </Text>
              <Text textStyle="body" mt={2}>
                Eco-designed pack made of glass.
              </Text>
              <Stack spacing={0}>
                <Text textStyle="body" fontStyle="italic">
                  Dermatologically tested.
                </Text>
                <Text textStyle="body" fontStyle="italic">
                  Suitable for sensitive skin.
                </Text>
              </Stack>
            </Stack>
            <HStack mt={4} justifyContent="flex-end">
              <Box
                borderWidth="1px"
                borderColor="597161"
                borderRadius="20px"
                bgColor="#FFFF"
                color="#597161"
                py={2}
                width="250px"
                display="flex"
                justifyContent="center"
              >
                100ml
              </Box>
              <Button
                borderRadius="20px"
                bgColor="#597161"
                color="#FFF"
                _hover={{ bgColor: "#556246" }}
                width="450px"
                onClick={() => {
                  router.push("/product/checkout");
                }}
              >
                Add to cart
              </Button>
            </HStack>
          </GridItem>
        </SimpleGrid>
      </NavigationLayout>
    </ChakraProvider>
  );
}
