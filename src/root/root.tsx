import * as React from "react"

import { faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
          backgroundColor: "red",
          p: "16px 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ height: "50px", width: "50px", backgroundColor: "black" }} />
        <div style={{ flex: "1" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "450px",
            a: {
              color: "black",
              textDecoration: "none",
              "&:hover": {
                color: "blue",
              },
            },
          }}
        >
          <Link to={Path.Home}>Home</Link>
          <Link to={Path.About}>About</Link>
          <Link to={Path.Skills}>Skills</Link>
          <Link to={Path.Projects}>Projects</Link>
          <Link to={Path.Contact}>Contact</Link>
        </Box>
        <div style={{ flex: "1" }} />
        <FontAwesomeIcon icon={faSun} style={{ height: "40px", width: "40px" }} />
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
  )
}
