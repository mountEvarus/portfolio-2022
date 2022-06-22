import * as React from "react"

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box } from "@mui/material"

import { ColorMode, FlexSpacer, InternalLink } from "@src/common"
import { useColorContext } from "@src/providers"
import { Path } from "@src/root"

import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { mode, toggleColorMode } = useColorContext()
  const {
    colorModeIconStyles,
    linkBoxStyles,
    logoPlaceholderStyles,
    outerBoxStyles,
  } = useStyles()

  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun

  return (
    <Box component="header" sx={outerBoxStyles}>
      <div style={logoPlaceholderStyles} />
      <FlexSpacer />
      <Box sx={linkBoxStyles}>
        <InternalLink to={Path.Home}>Home</InternalLink>
        <InternalLink to={Path.Experience}>Experience</InternalLink>
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
