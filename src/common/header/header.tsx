import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Link} from "@mui/material"
import * as React from "react"

import { ColorMode, FlexSpacer } from "@src/common"
import { useColorContext } from "@src/providers"
import {Path} from "@src/root"

export function Header(): JSX.Element {
  const { mode, toggleColorMode } = useColorContext()
  const modeIcon = mode === ColorMode.Dark ? faMoon : faSun

  return <Box
    component="header"
    sx={{
      backgroundColor: "red",
      p: "16px 24px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div style={{ height: "50px", width: "50px", backgroundColor: "black" }} />
    <FlexSpacer />
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "450px",
        a: {
          textDecoration: "none",
        },
      }}
    >
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
      style={{ height: "40px", width: "40px" }}
    />
  </Box>
}
