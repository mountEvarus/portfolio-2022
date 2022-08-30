import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const extraLargeQuery = useScreenSizeQuery("xl", "min-width")
  const mediumQuery = useScreenSizeQuery("md", "min-width")

  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    gap: "32px",
    maxWidth: "2160px",    
    m: "auto",
    pb: "60px",
    pt: extraLargeQuery ? "64px"
      : mediumQuery ? "32px"
        : "0",
  }
}
