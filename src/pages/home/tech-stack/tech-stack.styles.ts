import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()

  return {
    fill: theme.palette.text.primary,
    display: "grid",
    gap: "96px",
    gridTemplateColumns: "1fr 1fr 1fr",
    m: "48px 32px",
  }
}
