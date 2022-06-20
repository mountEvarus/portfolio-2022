import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor } from "@src/hooks"

type HeaderStyles = {
  colorModeIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  logoPlaceholderStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  const backgroundColor = useBackgroundColor()
  const theme = useTheme()

  return {
    colorModeIconStyles: {
      height: "40px",
      width: "40px",
    },
    linkBoxStyles: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      width: "600px",
    },
    logoPlaceholderStyles: {
      backgroundColor: "black",
      height: "50px",
      width: "50px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor,
      display: "flex",
      p: "16px 24px",
      transition: ".5s ease-in",
      "*::selection": {
        backgroundColor: theme.palette.marginal.main,
      },
      "*::-moz-selection": {
        backgroundColor: theme.palette.marginal.main,
      },
    },
  }
}
