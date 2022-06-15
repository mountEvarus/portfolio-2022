import * as React from "react"
import { BrowserRouter } from "react-router-dom"

import { ColorModeProvider } from "@src/providers"
import { Root } from "@src/root"

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ColorModeProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ColorModeProvider>
    </React.StrictMode>
  )
}
