import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { MdClose, MdInfo, MdWarning } from "react-icons/md";

export function useArcToast(
  options?: UseToastOptions
): ReturnType<typeof useToast> {
  const cachedOptions = useMemo<UseToastOptions>(
    () => ({ position: "top-right", ...options }),
    [options]
  );
  const toast = useToast(cachedOptions);

  const result = useMemo(() => {
    const r = (options?: UseToastOptions | undefined) => {
      return toast({
        render: (props) => (
          <NuggetsToast onClose={props.onClose} options={options} />
        ),
        ...options,
      });
    };
    const { close, closeAll, isActive, update } = toast;
    Object.assign(r, { close, closeAll, isActive, update });
    return r;
  }, [toast]);

  return result as ReturnType<typeof useToast>;
}

interface NuggetsToastProps {
  options?: UseToastOptions;
  onClose?: () => void;
}
export const NuggetsToast = (props: NuggetsToastProps) => {
  const { options, onClose } = props;

  let icon = undefined;

  let bgColor = undefined;
  let borderColor = undefined;

  switch (options?.variant) {
    case "info": {
      bgColor = "#F2F7FF";
      borderColor = "#0044F333";
      icon = <Icon as={MdInfo} h="20px" w="20px" color="#0044F3" />;
      break;
    }
    case "warning": {
      bgColor = "#FDF5F3";
      borderColor = "#D74A3233";
      icon = <Icon as={MdWarning} w="21px" h="18px" color="#D74A32" />;
      break;
    }
    case "error": {
      bgColor = "#FFFBF2";
      borderColor = "#E0A10033";
      icon = <Icon as={MdWarning} w="21px" h="18px" color="#D74A32" />;
      break;
    }
  }

  return (
    <HStack
      bgColor={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="4px"
      color="nuggets.sageGreen"
      px={6}
      py={4}
      spacing={4}
      alignItems="flex-start"
    >
      <Box w="24px" h="24px" display="flex" alignItems="center">
        {icon}
      </Box>
      <Stack spacing={1}>
        {options?.title && (
          <Text fontWeight="500" fontSize="13px">
            {options.title}
          </Text>
        )}
        {options?.description && (
          <Text textStyle="body" fontSize="13px">
            {options.description}
          </Text>
        )}
      </Stack>
      {onClose && (
        <Box w="24px" h="24px" ml={1} display="flex" alignItems="start">
          <Icon
            as={MdClose}
            h="20px"
            w="20px"
            cursor="pointer"
            onClick={() => {
              onClose();
            }}
          />
        </Box>
      )}
    </HStack>
  );
};
