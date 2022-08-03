import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor, useScreenSizeQuery } from "@src/hooks"

type HeaderStyles = {
  colorModeIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  logoStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  const backgroundColor = useBackgroundColor()
  const theme = useTheme()
  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    colorModeIconStyles: {
      height: smallQuery ? "40px" : "24px",
      transition: ".5s ease-in",
      width: smallQuery ? "40px" : "24px",
    },
    linkBoxStyles: {
      alignItems: "center",
      display: "flex",
      fontFamily: theme.typography.body2.fontFamily,
      fontSize: smallQuery ? "22px" : "24px",
      gap: mediumQuery 
        ? "220px" 
        : smallQuery ? "64px" : "32px",
      justifyContent: "space-between",
    },
    logoStyles: {
      fill: theme.palette.text.primary,
      height: smallQuery ? "50px" : "25px",
      transition: ".5s ease-in",
      width: smallQuery ? "50px" : "25px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor,
      display: "flex",
      p: "16px 32px",
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
