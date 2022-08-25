import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor, useScreenSizeQuery } from "@src/hooks"

type HeaderStyles = {
  logoStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  const backgroundColor = useBackgroundColor()
  const theme = useTheme()
  const largeQuery = useScreenSizeQuery("lg", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    logoStyles: {
      fill: theme.palette.text.primary,
      height: largeQuery 
        ? "50px" : smallQuery 
          ? "30px" : "25px",
      transition: ".5s ease-in",
      width: largeQuery
        ? "50px" : smallQuery
          ? "30px" : "25px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor,
      display: "flex",
      px: "32px",
      py: largeQuery ? "16px" : "8px",
      transition: "background-color .5s ease-in",
      a: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      },
      "*::selection": {
        backgroundColor: theme.palette.marginal.main,
      },
      "*::-moz-selection": {
        backgroundColor: theme.palette.marginal.main,
      },
    },
  }
}
