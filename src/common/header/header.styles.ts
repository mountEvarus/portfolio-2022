import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"
import * as React from "react"

type HeaderStyles = {
  colorModeIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  logoPlaceholderStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  return {
    colorModeIconStyles: {
      height: "40px", 
      width: "40px"
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
      backgroundColor: "red",
      p: "16px 24px",
      display: "flex",
      alignItems: "center",
    },
  }
}
