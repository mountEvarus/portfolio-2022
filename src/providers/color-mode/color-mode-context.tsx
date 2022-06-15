import * as React from "react"

import { ColorMode } from "@src/common"

export type ColorContext = {
  mode: ColorMode
  toggleColorMode: () => void
}

export const ColorModeContext = React.createContext<ColorContext>({
  mode: ColorMode.Light,
  toggleColorMode: () => console.log("Color mode context not yet initialised"),
})
