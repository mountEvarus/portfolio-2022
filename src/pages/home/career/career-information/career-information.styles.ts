import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type CareerTimelineStyles = {
  headingStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): CareerTimelineStyles {
  const query = useScreenSizeQuery("md", "min-width")

  return {
    headingStyles: {
      mb: "48px",
    },
    outerBoxStyles: {
      m: query ? "24px" : "24px 0px",
    },
  }
}
