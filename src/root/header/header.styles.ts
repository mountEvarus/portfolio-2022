import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useBackgroundColor } from "@src/hooks"

type HeaderStyles = {
  colorModeIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  logoStyles: React.CSSProperties
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
      fontFamily: theme.typography.body2.fontFamily,
      fontSize: "22px",
      justifyContent: "space-between",
      width: "700px",
    },
    logoStyles: {
      fill: theme.palette.text.primary,
      height: "50px",
      width: "50px",
    },
    outerBoxStyles: {
      alignItems: "center",
      backgroundColor,
      display: "flex",
      p: "16px 32px",
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
