import * as React from "react"

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Link } from "@mui/material"
import Logo from "@src/assets/logo.svg"

import { ColorMode, FlexSpacer, InternalLink } from "@src/common"
import { useScreenSizeQuery } from "@src/hooks"
import { useColorContext } from "@src/providers"

import { HeaderLinks } from "./header-links"
import { useStyles } from "./header.styles"

export function Header(): JSX.Element {
  const { mode, toggleColorMode } = useColorContext()
  const query = useScreenSizeQuery("sm", "min-width")
  const { colorModeIconStyles, linkBoxStyles, logoStyles, outerBoxStyles } =
    useStyles()

  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun

  return (
    <Box component="header" sx={outerBoxStyles}>
      <Link href="https://github.com/mountEvarus" target="_blank">
        <Logo style={logoStyles} />
      </Link>
      <FlexSpacer />
      <Box component="nav" sx={linkBoxStyles}>
        {HeaderLinks.map((link, index) => {
          const { icon, name, path } = link
          const content = query 
            ? name
            : <FontAwesomeIcon icon={icon} />

          return (
            <InternalLink key={index} to={path}>
              {content}
            </InternalLink>
          )
        })}
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
