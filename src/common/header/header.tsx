import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Link} from "@mui/material"
import * as React from "react"

import { ColorMode, FlexSpacer } from "@src/common"
import { useColorContext } from "@src/providers"
import { Path } from "@src/root"

import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { mode, toggleColorMode } = useColorContext()
  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun
  const { 
    colorModeIconStyles,
    linkBoxStyles,
    logoPlaceholderStyles,
    outerBoxStyles,
  } = useStyles()

  return <Box component="header" sx={outerBoxStyles}>
    <div style={logoPlaceholderStyles} />
    <FlexSpacer />
    <Box sx={linkBoxStyles}>
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
      style={colorModeIconStyles}
    />
  </Box>
}
