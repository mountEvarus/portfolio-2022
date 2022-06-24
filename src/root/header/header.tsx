import * as React from "react"

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Link } from "@mui/material"
import Logo from "@src/assets/logo.svg"

import { ColorMode, FlexSpacer, InternalLink } from "@src/common"
import { useColorContext } from "@src/providers"
import { Path } from "@src/root"

import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { mode, toggleColorMode } = useColorContext()
  const { colorModeIconStyles, linkBoxStyles, logoStyles, outerBoxStyles } =
    useStyles()

  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun

  return (
    <Box component="header" sx={outerBoxStyles}>
      <Link href="https://github.com/mountEvarus" target="_blank">
        <Logo style={logoStyles} />
      </Link>
      <FlexSpacer />
      <Box sx={linkBoxStyles}>
        <InternalLink to={Path.Home}>Home</InternalLink>
        <InternalLink to={Path.Projects}>Projects</InternalLink>
        <InternalLink to={Path.Contact}>Contact</InternalLink>
      </Box>
      <FlexSpacer />
      <FontAwesomeIcon
        icon={modeIcon}
        onClick={toggleColorMode}
        style={colorModeIconStyles}
      />
    </Box>
  )
}
