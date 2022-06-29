import * as React from "react"

import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type TechStackItemStyles = {
  svgStyles: React.CSSProperties
  tooltipStyles: SxProps<Theme>
}

export function useStyles(): TechStackItemStyles {
  return {
    svgStyles: {
      height: "48px",
      justifySelf: "center",
      transition: ".5s ease-in",
      width: "48px",
    },
    tooltipStyles: {
      cursor: "default",
    },
  }
}
