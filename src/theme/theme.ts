import { createTheme, responsiveFontSizes } from "@mui/material/styles"

import { ColorMode } from "@src/common"

export function getDefaultTheme(mode: ColorMode) {
  return responsiveFontSizes(
    createTheme({
      palette: {
        ...(mode === ColorMode.Light ? LightPalette : DarkPalette),
        mode,
      },
    })
  )
}

const LightPalette = {
  text: {
    primary: "rgba(51, 51, 51, 0.8)",
  },
  background: {
    default: "rgba(250, 250, 250, 0.9)",
  },
  about: {
    main: "rgba(74, 255, 0, 0.8)",
  },
  contact: {
    main: "rgba(255, 138, 0, 0.8)",
  },
  home: {
    main: "rgba(0, 255, 234, 0.8)",
  },
  marginal: {
    main: "rgba(255, 255, 255, 0.5)",
  },
  projects: {
    main: "rgba(191, 0, 255, 0.8)",
  },
  skills: {
    main: "rgba(255, 0, 0, 0.8)",
  },
}

const DarkPalette = {
  text: {
    primary: "rgba(255, 248, 225, 0.8)",
  },
  background: {
    default: "rgba(0, 0, 0, 0.9)",
  },
  about: {
    main: "rgba(37, 125, 0, 0.8)",
  },
  contact: {
    main: "rgba(172, 92, 0, 0.8)",
  },
  home: {
    main: "rgba(0, 130, 119, 0.8)",
  },
  marginal: {
    main: "rgba(0, 0, 0, 0.5)",
  },
  projects: {
    main: "rgba(94, 0, 125, 0.8)",
  },
  skills: {
    main: "rgba(131, 0, 0, 0.8)",
  },
}
