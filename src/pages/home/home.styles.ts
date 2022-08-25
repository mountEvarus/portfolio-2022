import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const query = useScreenSizeQuery("md", "min-width")

  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    maxWidth: "2160px",    
    m: "auto",
    pb: "60px",
    pt: query ? "120px": 0,
  }
}
