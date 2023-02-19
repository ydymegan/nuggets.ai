import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { NavigationLayout } from "./components/NavigationLayout";
import { NuggetsImageCard } from "./components/NuggetsImageCard";

export const Landing = () => {
  return (
    <NavigationLayout>
      <Stack alignItems="center" spacing={4}>
        <Text textStyle="heading1" fontSize="48px">
          SKINCARE PRODUCTS
        </Text>
        <Stack alignItems="center" spacing={0}>
          <Text textStyle="body" textAlign="center">
            A skincare routine with clean formulas made in France with a minimum
            of 96% natural origin ingredients. Discover our beauty essentials:
          </Text>
          <Text textStyle="body" textAlign="center" w="70%">
            Floral Mist, Active Serums, Fortifying CBD moisturizer, In&Out
            Nurturing phytho oil. All our formulas have been created to optimize
            the natural strength of all skin types, even the most sensitive.
          </Text>
        </Stack>
      </Stack>
      <HStack justifyContent="space-around">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => {
          return <NuggetsImageCard key={i} imgSrc={`product-${i}.png`} />;
        })}
      </HStack>
    </NavigationLayout>
  );
};
