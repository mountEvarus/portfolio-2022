import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

type HeaderStyles = {
  colorModeIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  logoPlaceholderStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  const theme = useTheme()

  return {
    colorModeIconStyles: {
      height: "40px",
      width: "40px",
    },
    linkBoxStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "450px",
      a: {
        textDecoration: "none",
      },
    },
    logoPlaceholderStyles: {
      height: "50px",
      width: "50px",
      backgroundColor: "black",
    },
    outerBoxStyles: {
      backgroundColor: theme.palette.primary.light,
      p: "16px 24px",
      display: "flex",
      alignItems: "center",
    },
  }
}
