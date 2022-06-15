import * as React from "react"

import { ColorModeProvider } from "@src/providers"
import { Root } from "@src/root"
import { BrowserRouter } from "react-router-dom"

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
