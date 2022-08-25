import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor, useScreenSizeQuery } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()
  const highlightColor = useBackgroundColor()
  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  const footerHeight = "48px"
  const headerHeight = smallQuery ? "82px" : "57px"

  return {
    backgroundColor: theme.palette.background.default,
    maxWidth: "2160px",    
    m: "auto",
    minHeight: `calc(100vh - ${headerHeight} - ${footerHeight})`,
    p: mediumQuery ? "64px 80px" : "24px 24px 64px 24px",
    transition: "background-color .5s ease-in",
    "*::selection": {
      backgroundColor: highlightColor,
    },
    "*::-moz-selection": {
      backgroundColor: highlightColor,
    },
  }
}
