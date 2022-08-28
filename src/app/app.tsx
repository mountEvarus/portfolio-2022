import * as React from "react"

import { HashRouter } from "react-router-dom"

import { ColorModeProvider } from "@src/providers"
import { Root } from "@src/root"

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ColorModeProvider>
        <HashRouter>
          <Root />
        </HashRouter>
      </ColorModeProvider>
    </React.StrictMode>
  )
}
