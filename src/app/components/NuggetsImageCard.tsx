import { Box, Image } from "@chakra-ui/react";

interface NuggetsImageCardProps {
  imgSrc: string;
}

export const NuggetsImageCard = (props: NuggetsImageCardProps) => {
  const { imgSrc } = props;

  return (
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
  );
};
