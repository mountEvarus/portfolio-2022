import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()
  const backgroundColor = useBackgroundColor()

  return {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    p: "64px 80px",
    transition: "background-color .5s ease-in",
    "*::selection": {
      backgroundColor,
    },
    "*::-moz-selection": {
      backgroundColor,
    },
  }
}
