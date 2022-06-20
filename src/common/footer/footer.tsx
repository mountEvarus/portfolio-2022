import * as React from "react"

import { Box, Typography } from "@mui/material"

import { useYear } from "@src/hooks"

import { useStyles } from "./footer.styles"

export function Footer(): JSX.Element {
  const year = useYear()
  const styles = useStyles()

  return (
    <Box component="footer" sx={styles}>
      <Typography>© Evan Hynes, {year}</Typography>
    </Box>
  )
}
