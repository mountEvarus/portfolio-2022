import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const backgroundColor = useBackgroundColor()
  const theme = useTheme()

  return {
    alignItems: "center",
    bottom: 0,
    backgroundColor,
    display: "flex",
    justifyContent: "flex-end",
    p: "12px 16px",
    position: "absolute",
    transition: "background-color .5s ease-in",
    width: "100%",
    "*::selection": {
      backgroundColor: theme.palette.marginal.main,
    },
    "*::-moz-selection": {
      backgroundColor: theme.palette.marginal.main,
    },
  }
}
