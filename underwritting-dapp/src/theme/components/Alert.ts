import { mode } from "@chakra-ui/theme-tools"

type Dict = Record<string, any>

function variantTransaction(props: Dict) {
  return {
    container: {
      borderRaius: "2xl",
      bgColor: "purple.main",
      color: mode(`white`, `gray.900`)(props),
    },
  }
}

const variants = {
  transaction: variantTransaction,
}

export default {
  variants,
}
