import * as React from "react"

import { Theme } from "@mui/material"
import { SxProps , keyframes } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type HeaderStyles = {
  colorModeIconStyles: React.CSSProperties
  outerBoxStyles: SxProps<Theme>
  typographyStyles: SxProps<Theme>
}

export function useStyles(): HeaderStyles {
  const largeQuery = useScreenSizeQuery("lg", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    colorModeIconStyles: {
      height: largeQuery 
        ? "40px" : smallQuery 
          ? "28px" : "24px",
      transition: ".5s ease-in",
      width: largeQuery 
        ? "40px" : smallQuery 
          ? "28px" : "24px",
    },
    outerBoxStyles: {
      alignItems: "center",
      display: "flex",
      gap: "16px",
    },
    typographyStyles: {
      animation: `${typographyScaleAnimation} 2.5s infinite ease-in-out`,
      fontWeight: "bold",
    },
  }
}

const typographyScaleAnimation = keyframes`
  0% {
    transform: scale(1.0)
  }

  50% {
    transform: scale(1.1)
  }

  100% {
    transform: scale(1.0)
  }
`
