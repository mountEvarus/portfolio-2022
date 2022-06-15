import * as React from "react"

import { ColorContext, ColorModeContext } from "./color-mode-context"

export function useColorContext(): ColorContext {
  return React.useContext(ColorModeContext)
}
