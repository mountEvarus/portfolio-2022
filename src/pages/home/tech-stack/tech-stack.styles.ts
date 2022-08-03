import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()
  const query = useScreenSizeQuery("md", "min-width")

  return {
    fill: theme.palette.text.primary,
    display: "grid",
    gap: query ? "96px" : "24px",
    gridTemplateColumns: "1fr 1fr 1fr",
    m: query ? "48px 32px" : "32px 8px",
  }
}
