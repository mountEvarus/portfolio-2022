import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { ColorMode } from "@src/common"
import { useColorContext } from "@src/providers"

type ProjectCardStyles = {
  descriptionTextStyles: SxProps<Theme>
  headingBoxStyles: SxProps<Theme>
  infoIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(descriptionTabOpen: boolean): ProjectCardStyles {
  const theme = useTheme()
  const { mode } = useColorContext()
  const descriptionTextBackgroundColor =
    mode === ColorMode.Light
      ? "rgba(255, 255, 255, 1.0)"
      : "rgba(30, 30, 30, 1.0)"

  return {
    descriptionTextStyles: {
      backgroundColor: descriptionTextBackgroundColor,
      height: descriptionTabOpen ? "250px" : "0",
      overflow: "hidden",
      position: "absolute",
      px: "10px",
      py: "auto",
      transition: ".5s ease-in",
    },
    headingBoxStyles: {
      alignItems: "center",
      display: "flex",
      gap: "16px",
    },
    infoIconStyles: {
      cursor: "pointer",
    },
    linkBoxStyles: {
      alignItems: "center",
      display: "flex",
      fontSize: "36px",
      justifyContent: "space-evenly",
      width: "250px",
      a: {
        color: theme.palette.text.primary,
      },
    },
    outerBoxStyles: {
      alignItems: "center",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      height: "500px",
      justifyContent: "space-between",
      position: "relative",
      py: "24px",
      width: "500px",
    },
  }
}
