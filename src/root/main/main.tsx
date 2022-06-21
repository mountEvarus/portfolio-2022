import * as React from "react"

import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"

import { Path } from "@src/root"

import { useStyles } from "./main.styles"
export function Main(): JSX.Element {
  const styles = useStyles()

  return (
    <Box component="main" sx={styles}>
      <Routes>
        <Route path={Path.Home} element={<p>Home page</p>} />
        <Route path={Path.About} element={<p>About page</p>} />
        <Route path={Path.Skills} element={<p>Skills page</p>} />
        <Route path={Path.Projects} element={<p>Projects page</p>} />
        <Route path={Path.Contact} element={<p>Contact page</p>} />
      </Routes>
    </Box>
  )
}
