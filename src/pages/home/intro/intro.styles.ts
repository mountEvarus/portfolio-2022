import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {

  return {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    mt: "24px",
  }
}
