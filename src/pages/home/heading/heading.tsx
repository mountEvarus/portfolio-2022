import * as React from "react"

import { Box, Typography } from "@mui/material"

import { useStyles } from "./heading.styles"

export function Heading(): JSX.Element {
  const { headingStyles, outerBoxStyles, subHeadingStyles } = useStyles()

  return (
    <Box component="section" sx={outerBoxStyles}>
      <Typography sx={headingStyles} variant="h1">Evan Hynes</Typography>
      <Typography sx={subHeadingStyles} variant="h2">
        Full Stack Software Engineer.
      </Typography>
    </Box>
  )
}
