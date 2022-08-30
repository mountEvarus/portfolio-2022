import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type CareerTimelineStyles = {
  headingStyles: SxProps<Theme>
  stepperStyles: SxProps<Theme>
}

export function useStyles(): CareerTimelineStyles {
  const query = useScreenSizeQuery("md", "min-width")

  return {
    headingStyles: {
      mb: "48px",
    },
    stepperStyles: {
      fontSize: query ? "30px" : "24px",
      transition: ".5s ease-in",
    },
  }
}
