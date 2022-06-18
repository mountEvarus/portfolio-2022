import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, CssBaseline, Link ,ThemeProvider} from "@mui/material"
import * as React from "react"
import { Route, Routes } from "react-router-dom"

import { ColorMode, FlexSpacer } from "@src/common"
import { useYear } from "@src/hooks"
import { useColorContext } from "@src/providers"
import { useDefaultTheme } from "@src/theme"

import { Path } from "./path"

export function Root(): JSX.Element {
  const { mode, toggleColorMode } = useColorContext()
  const theme = React.useMemo(() => useDefaultTheme(mode), [mode])
  const year = useYear()
  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box
          component="header"
          sx={{
            backgroundColor: "red",
            p: "16px 24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ height: "50px", width: "50px", backgroundColor: "black" }} />
          <FlexSpacer />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "450px",
              a: {
                textDecoration: "none",
              },
            }}
          >
            <Link href={Path.Home}>Home</Link>
            <Link href={Path.About}>About</Link>
            <Link href={Path.Skills}>Skills</Link>
            <Link href={Path.Projects}>Projects</Link>
            <Link href={Path.Contact}>Contact</Link>
          </Box>
          <FlexSpacer />
          <FontAwesomeIcon
            icon={modeIcon}
            onClick={toggleColorMode}
            style={{ height: "40px", width: "40px" }}
          />
        </Box>
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
