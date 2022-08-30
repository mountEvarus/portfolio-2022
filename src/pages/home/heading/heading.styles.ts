import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type HeadingStyles = {
  headingStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  subHeadingStyles: SxProps<Theme>
}

export function useStyles(): HeadingStyles {
  const query = useScreenSizeQuery("md", "min-width")

  return {
    headingStyles: {
      fontSize: query ? "6rem" : "2.25rem",
    },
    outerBoxStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    subHeadingStyles: {
      fontSize: query ? "3.75rem" : "2rem",
      pl: "40px",
    },
  }
}
