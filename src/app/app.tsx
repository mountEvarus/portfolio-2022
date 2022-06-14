import * as React from "react"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { Root } from "@src/root"
import { BrowserRouter } from "react-router-dom"

import { theme } from "./theme"

export function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}
