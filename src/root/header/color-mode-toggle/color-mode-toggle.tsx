import * as React from "react"

import { faArrowRight, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"


import { ColorMode } from "@src/common"
import { useLocalStorage, useScreenSizeQuery } from "@src/hooks"
import { LocalStorageKey, useColorContext } from "@src/providers"

import { useStyles } from "./color-mode-toggle.styles"

export function ColorModeToggle(): JSX.Element {
  const { getLocalStorage } = useLocalStorage()
  const { mode, toggleColorMode } = useColorContext()
  const { colorModeIconStyles, outerBoxStyles, typographyStyles } = useStyles()
  const query = useScreenSizeQuery("md", "min-width")

  const isColorModeUnset = getLocalStorage(LocalStorageKey) === null

  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun

  return (
    <Box sx={outerBoxStyles}>
      {isColorModeUnset && query &&
      <> 
        <Typography sx={typographyStyles}>Click the icon!</Typography>
        <FontAwesomeIcon
          icon={faArrowRight}
        />
      </>
      }
      <FontAwesomeIcon
        icon={modeIcon}
        onClick={toggleColorMode}
        style={colorModeIconStyles}
      />
    </Box>
  )
}
