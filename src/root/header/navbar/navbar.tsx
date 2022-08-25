import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box } from "@mui/material"


import { InternalLink } from "@src/common"
import { useScreenSizeQuery } from "@src/hooks"

import { HeaderLinks } from "./navbar-links"
import { useStyles } from "./navbar.styles"

export function Navbar(): JSX.Element {
  const query = useScreenSizeQuery("sm", "min-width")
  const styles = useStyles()

  return (
    <Box component="nav" sx={styles}>
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
  )
}
