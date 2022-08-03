import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type ProjectStyles = {
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): ProjectStyles {
  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    outerBoxStyles: {
      alignItems: "center",
      display: "grid",
      gap: mediumQuery ? "48px" : "8px",
      gridTemplateColumns: smallQuery ? "1fr 1fr" : "1fr",
      height: "100%",
      justifyItems: "center",
      mx: "auto",
    },
  }
}
