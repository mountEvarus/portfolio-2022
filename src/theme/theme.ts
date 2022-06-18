import { createTheme, responsiveFontSizes } from "@mui/material/styles"

import { ColorMode } from "@src/common"

export function useDefaultTheme(mode: ColorMode) {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...(mode === ColorMode.Light ? LightPalette : DarkPalette),
      },
    })
  )
}

const LightPalette = {
  primary: {
    main: "rgba(51, 51, 51, 0.8)",
    light: "rgba(51, 51, 51, 0.4)"
  },
  text: {
    primary: "rgba(51, 51, 51, 0.8)",
  },
  background: {
    default: "rgba(250, 250, 250, 0.8)"
  },
}

const DarkPalette = {
  primary: {
    main: "rgba(255, 248, 225, 0.8)",
    light: "rgba(255, 248, 225, 0.4)",
  },
  text: {
    primary: "rgba(255, 248, 225, 0.8)",
  },
  background: {
    default: "rgba(0, 0, 0, 0.8)"
  },
}
