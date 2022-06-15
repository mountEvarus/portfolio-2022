import * as React from "react"

import { ColorMode } from "@src/common"

import { ColorContext, ColorModeContext } from "./color-mode-context"

export function ColorModeProvider<T>(props: React.PropsWithChildren<T>): JSX.Element {
  const colorContext = useColorContext()

  return (
    <ColorModeContext.Provider value={colorContext}>{props.children}</ColorModeContext.Provider>
  )
}

function useColorContext(): ColorContext {
  const [mode, setMode] = React.useState<ColorMode>(ColorMode.Light)
  console.log(mode)

  function toggleColorMode(): void {
    setMode((previous) => (previous === ColorMode.Light ? ColorMode.Dark : ColorMode.Light))
  }

  return {
    mode,
    toggleColorMode,
  }
}
