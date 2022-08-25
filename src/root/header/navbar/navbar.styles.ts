import { Theme  } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    alignItems: "center",
    display: "flex",
    fontSize: smallQuery ? "22px" : "24px",
    gap: mediumQuery 
      ? "220px" 
      : smallQuery ? "64px" : "32px",
    justifyContent: "space-between",
  }
}
