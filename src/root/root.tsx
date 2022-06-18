import { Box, CssBaseline, ThemeProvider} from "@mui/material"
import * as React from "react"
import { Route, Routes } from "react-router-dom"

import { Header } from "@src/common"
import { useYear } from "@src/hooks"
import { useColorContext } from "@src/providers"
import { useDefaultTheme } from "@src/theme"

import { Path } from "./path"

export function Root(): JSX.Element {
  const { mode,  } = useColorContext()
  const theme = React.useMemo(() => useDefaultTheme(mode), [mode])
  const year = useYear()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header/>
        <Box component="main" sx={{ height: "100%" }}>
          <Routes>
            <Route path={Path.Home} element={<p>Home page</p>} />
            <Route path={Path.About} element={<p>About page</p>} />
            <Route path={Path.Skills} element={<p>Skills page</p>} />
            <Route path={Path.Projects} element={<p>Projects page</p>} />
            <Route path={Path.Contact} element={<p>Contact page</p>} />
          </Routes>
        </Box>
        <Box
          component="footer"
          sx={{
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            p: "12px 16px",
          }}
        >
          © Evan Hynes, {year}
        </Box>
      </Box>
    </ThemeProvider>
  )
}
