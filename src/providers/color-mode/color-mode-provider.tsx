import * as React from "react"

import { ColorMode } from "@src/common"
import { useLocalStorage } from "@src/hooks"

import { ColorContext, ColorModeContext } from "./color-mode-context"
import { useDefaultColorMode } from "./default-color-mode"
import { LocalStorageKey } from "./local-storage-key"

export function ColorModeProvider<T>(
  props: React.PropsWithChildren<T>,
): JSX.Element {
  const colorContext = useColorContext()

  return (
    <ColorModeContext.Provider value={colorContext}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

function useColorContext(): ColorContext {
  const defaultColor = useDefaultColorMode()

  const [mode, setMode] = React.useState<ColorMode>(defaultColor)
  const { setLocalStorage } = useLocalStorage()

  function toggleColorMode(): void {
    const newColorMode =
      mode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light

    setMode(newColorMode)
    setLocalStorage(LocalStorageKey, newColorMode)
  }

  return {
    mode,
    toggleColorMode,
  }
}
