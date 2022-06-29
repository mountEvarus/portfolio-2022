import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type HeadingStyles = {
  outerBoxStyles: SxProps<Theme>
  subHeadingStyles: SxProps<Theme>
}

export function useStyles(): HeadingStyles {
  return {
    outerBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    subHeadingStyles: {
      pl: "40px",
    },
  }
}
