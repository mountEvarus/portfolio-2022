import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { ColorMode } from "@src/common"

export function useDefaultTheme(mode: ColorMode) {
  return responsiveFontSizes(createTheme({ palette: { mode } }))
}
