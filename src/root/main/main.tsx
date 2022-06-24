import * as React from "react"

import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"

import { Contact, Home, Projects } from "@src/pages"
import { Path } from "@src/root"

import { useStyles } from "./main.styles"
export function Main(): JSX.Element {
  const styles = useStyles()

  return (
    <Box component="main" sx={styles}>
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Projects} element={<Projects />} />
        <Route path={Path.Contact} element={<Contact />} />
      </Routes>
    </Box>
  )
}
