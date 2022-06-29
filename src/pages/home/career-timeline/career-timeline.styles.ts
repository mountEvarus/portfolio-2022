import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

type CareerTimelineStyles = {
  headingStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  stepperStyles: SxProps<Theme>
}

export function useStyles(): CareerTimelineStyles {
  return {
    headingStyles: {
      mb: "48px",
    },
    outerBoxStyles: {
      m: "24px",
    },
    stepperStyles: {
      fontSize: "30px",
      transition: ".5s ease-in",
    },
  }
}
