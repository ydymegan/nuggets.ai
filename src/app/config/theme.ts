import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    nuggets: {
      brown: "#482216",
      peach: "#DAA38B",
      beige: "#FEEBCA",
      olive: "#908660",
      sageGreen: "#4D4B30",
    },
  },
  fonts: {
    heading: "Open Sans Bold",
    body: "Open Sans Regular",
  },
  styles: {
    global: {
      label: {
        fontSize: "12px",
        lineHeight: "150%",
        fontWeight: "500",
      },
    },
  },
  textStyles: {
    heading1: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "115%",
      color: "nuggets.sageGreen",
    },
    heading2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "125%",
      color: "nuggets.sageGreen",
    },
    body: {
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: "150%",
      color: "nuggets.sageGreen",
    },
  },
});
