import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";

interface NuggetsImageCardProps {
  imgSrc: string;
}

export const NuggetsImageCard = (props: NuggetsImageCardProps) => {
  const { imgSrc } = props;

  /**
   * mock data
   */

  let name = undefined;
  let translatedName = undefined;
  let price = undefined;
  let redirection = undefined;

  switch (imgSrc) {
    case "product-1.png": {
      name = "Reve of Pure";
      translatedName = "Anti-pollution gel cleanser";
      price = "USD 39";
      redirection = "/product/demo-product";
      break;
    }
    case "product-2.png": {
      name = "Avoir it all";
      translatedName = "In & Out Nurturing Phyto Oil";
      price = "USD 74";
      redirection = "/product/demo-product";
      break;
    }
    case "product-3.png": {
      name = "Amour de Repair";
      translatedName = "Nutri-fortifying cream";
      price = "USD 98";
      redirection = "/product/demo-product";
      break;
    }
  }

  return (
    <Stack>
      <Box
        borderWidth="1px"
        borderColor="nuggets.sageGreen"
        borderRadius="4px"
        width="max-content"
      >
        <Image
          boxSize="350px"
          h="400px"
          borderRadius="4px"
          objectFit="fill"
          src={imgSrc}
          alt={imgSrc}
        />
      </Box>
      <Link href={redirection}>
        <Stack cursor="pointer" spacing={0} alignItems="center">
          <Text textStyle="body" fontStyle="italic" fontWeight="700">
            {name}
          </Text>
          <Text textStyle="body" textTransform="uppercase" fontSize="12px">
            {translatedName}
          </Text>
        </Stack>
        <Text textStyle="body" textAlign="center" mt={2}>
          {price}
        </Text>
      </Link>
    </Stack>
  );
};
