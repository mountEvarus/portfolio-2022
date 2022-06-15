import * as React from "react"

import { Box } from "@mui/material"
import { useYear } from "@src/hooks"
import { Route, Routes, Link } from "react-router-dom"

import { Path } from "./path"

export function Root(): JSX.Element {
  const year = useYear()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        component="header"
        sx={{
          display: "flex",
          m: "32px 24px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* logo */}
        <Link to={Path.Home}>Home</Link>
        <Link to={Path.About}>About</Link>
        <Link to={Path.Skills}>Skills</Link>
        <Link to={Path.Projects}>Projects</Link>
        <Link to={Path.Contact}>Contact</Link>
        {/* dark/light mode */}
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
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          m: "24px 16px",
        }}
      >
        © Evan Hynes, {year}
      </Box>
    </Box>
  )
}
