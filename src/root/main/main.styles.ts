import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor, useScreenSizeQuery } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()
  const highlightColor = useBackgroundColor()
  const query = useScreenSizeQuery("md", "min-width")

  return {
    backgroundColor: theme.palette.background.default,
    height: "100%",
    p: query ? "64px 80px" : "24px",
    transition: "background-color .5s ease-in",
    "*::selection": {
      backgroundColor: highlightColor,
    },
    "*::-moz-selection": {
      backgroundColor: highlightColor,
    },
  }
}
