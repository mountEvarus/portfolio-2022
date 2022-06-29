import * as React from "react"

import { Box } from "@mui/material"

import { CareerTimeline } from "./career-timeline"
import { Heading } from "./heading"
import { useStyles } from "./home.styles"
import { TechStack } from "./tech-stack"

export function Home(): JSX.Element {
  const styles = useStyles()

  return (
    <Box sx={styles}>
      <Heading />
      <CareerTimeline />
      <TechStack />
    </Box>
  )
}
