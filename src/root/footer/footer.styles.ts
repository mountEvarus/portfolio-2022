import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const backgroundColor = useBackgroundColor()
  const theme = useTheme()

  return {
    alignItems: "center",
    backgroundColor,
    display: "flex",
    justifyContent: "flex-end",
    p: "12px 16px",
    transition: ".5s ease-in",
    "*::selection": {
      backgroundColor: theme.palette.marginal.main,
    },
    "*::-moz-selection": {
      backgroundColor: theme.palette.marginal.main,
    },
  }
}
