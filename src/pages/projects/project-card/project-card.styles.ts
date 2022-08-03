import * as React from "react"

import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { ColorMode } from "@src/common"
import { useScreenSizeQuery } from "@src/hooks"
import { useColorContext } from "@src/providers"

type ProjectCardStyles = {
  descriptionTextStyles: SxProps<Theme>
  headingBoxStyles: SxProps<Theme>
  imageStyles: React.CSSProperties
  infoIconStyles: React.CSSProperties
  linkBoxStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(descriptionTabOpen: boolean): ProjectCardStyles {
  const theme = useTheme()
  const { mode } = useColorContext()
  const query = useScreenSizeQuery("lg", "min-width")
  const descriptionTextBackgroundColor =
    mode === ColorMode.Light
      ? "rgba(255, 255, 255, 1.0)"
      : "rgba(30, 30, 30, 1.0)"

  return {
    descriptionTextStyles: {
      backgroundColor: descriptionTextBackgroundColor,
      height: descriptionTabOpen 
        ? query ? "250px" : "150px" 
        : "0",
      overflowX: "hidden",
      overflowY: query ? "hidden" : "scroll",
      position: "absolute",
      px: "10px",
      py: "auto",
      transition: ".5s ease-in",
    },
    headingBoxStyles: {
      alignItems: "center",
      display: "flex",
      gap: "16px",
      h4: {
        fontSize: "24px",
      },
    },
    imageStyles: {
      height: query ? "250px" : "150px",
      width: query ? "480px" : "280px",
    },
    infoIconStyles: {
      cursor: "pointer",
    },
    linkBoxStyles: {
      alignItems: "center",
      display: "flex",
      fontSize: query ? "36px" : "24px",
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
      height: query ? "500px" : "300px",
      justifyContent: "space-between",
      position: "relative",
      py: "24px",
      width: query ? "500px" : "300px",
    },
  }
}
