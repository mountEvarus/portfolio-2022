import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import * as React from "react"
import { Route, Routes } from "react-router-dom"

import { Footer, Header } from "@src/common"
import { useColorContext } from "@src/providers"
import { useDefaultTheme } from "@src/theme"

import { Path } from "./path"

export function Root(): JSX.Element {
  const { mode } = useColorContext()
  const theme = React.useMemo(() => useDefaultTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />
        <Box component="main" sx={{ height: "100%" }}>
          <Routes>
            <Route path={Path.Home} element={<p>Home page</p>} />
            <Route path={Path.About} element={<p>About page</p>} />
            <Route path={Path.Skills} element={<p>Skills page</p>} />
            <Route path={Path.Projects} element={<p>Projects page</p>} />
            <Route path={Path.Contact} element={<p>Contact page</p>} />
          </Routes>
        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}
