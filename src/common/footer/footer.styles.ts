import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()

  return {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    p: "12px 16px",
  }
}
