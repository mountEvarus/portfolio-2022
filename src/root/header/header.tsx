import * as React from "react"

import { Box, Link } from "@mui/material"
import Logo from "@src/assets/logo.svg"


import { FlexSpacer } from "@src/common"

import { ColorModeToggle } from "./color-mode-toggle"
import { useStyles } from "./header.styles"
import { Navbar } from "./navbar"

export function Header(): JSX.Element {
  const { logoStyles, outerBoxStyles } = useStyles()

  return (
    <Box component="header" sx={outerBoxStyles}>
      <Link href="https://github.com/mountEvarus" target="_blank">
        <Logo style={logoStyles} />
      </Link>
      <FlexSpacer />
      <Navbar />
      <FlexSpacer />
      <ColorModeToggle />
    </Box>
  )
}
