import * as React from "react"

import { Root } from "@src/root"
import { BrowserRouter } from "react-router-dom"

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </React.StrictMode>
  )
}
