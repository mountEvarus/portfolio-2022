import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

export function useStyles(): SxProps<Theme> {
  const theme = useTheme()

  return {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    textDecoration: "none",
    position: "relative",
    "&::before": {
      backgroundColor: theme.palette.text.primary,
      borderRadius: "4px",
      bottom: "-5px",
      content: "''",
      height: "4px",
      left: 0,
      position: "absolute",
      transform: "scaleX(0)",
      transformOrigin: "right",
      transition: "transform .3s ease-in-out",
      width: "100%",
    },
    "&:hover::before": {
      transform: "scaleX(1)",
      transformOrigin: "left",
    },
  }
}
