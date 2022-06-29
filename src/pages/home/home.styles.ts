import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    pb: "60px",
    pt: "120px",
  }
}
