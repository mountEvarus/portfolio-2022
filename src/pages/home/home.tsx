import * as React from "react"

import { Box } from "@mui/material"

import { Career } from "./career"
import { Heading } from "./heading"
import { useStyles } from "./home.styles"
import { TechStack } from "./tech-stack"

export function Home(): JSX.Element {
  const styles = useStyles()

  return (
    <Box sx={styles}>
      <Heading />
      <Career />
      <TechStack />
    </Box>
  )
}
