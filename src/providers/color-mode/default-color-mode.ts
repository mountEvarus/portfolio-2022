import { ColorMode } from "@src/common"
import { useLocalStorage } from "@src/hooks"

import { LocalStorageKey } from "./local-storage-key"

export function useDefaultColorMode(): ColorMode {
  const { getLocalStorage } = useLocalStorage()

  const localStorageValue = getLocalStorage(LocalStorageKey) ?? ""

  const isValidColorMode = Object.values(ColorMode).includes(
    localStorageValue as ColorMode
  )

  if (isValidColorMode) {
    return localStorageValue as ColorMode
  } else return ColorMode.Light
}
