import { Theme, useTheme } from "@mui/material"
import { SxProps } from "@mui/system"

type CareerInfoBlockStyles = {
  outerBoxStyles: SxProps<Theme>
  typographyStyles: SxProps<Theme>
}

export function useStyles(): CareerInfoBlockStyles {
  const theme = useTheme()

  return {
    outerBoxStyles: {
      my: theme.spacing(1.5),
    },
    typographyStyles: {
      display: "inline",
      ml: theme.spacing(1.5),
    },
  }
}
