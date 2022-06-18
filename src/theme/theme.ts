import { createTheme, responsiveFontSizes } from "@mui/material/styles"

import { ColorMode } from "@src/common"

export function useDefaultTheme(mode: ColorMode) {
  return responsiveFontSizes(createTheme({ 
    palette: { 
      mode,
      ...(mode === ColorMode.Light) ? LightPalette : DarkPalette,
    }
  }))
}

const LightPalette = {
  primary: {
    main: "#a83232"
  },
}

const DarkPalette = {
  primary: {
    main: "#324ca8"
  },
}
