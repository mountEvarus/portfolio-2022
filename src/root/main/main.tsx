import * as React from "react"

import { Box } from "@mui/material"
import { AnimatePresence } from "framer-motion"
import { Route, Routes , useLocation } from "react-router-dom"

import { Contact, Home, Projects } from "@src/pages"
import { Path } from "@src/root"


import { useStyles } from "./main.styles"
export function Main(): JSX.Element {
  const styles = useStyles()
  const location = useLocation()

  return (
    <Box component="main" sx={styles}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Projects} element={<Projects />} />
          <Route path={Path.Contact} element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Box>
  )
}
