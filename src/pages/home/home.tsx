import * as React from "react"

import { Box } from "@mui/material"
import { motion } from "framer-motion"

import { Career } from "./career"
import { Heading } from "./heading"
import { useStyles } from "./home.styles"
import { Intro } from "./intro"
import { TechStack } from "./tech-stack"

export function Home(): JSX.Element {
  const styles = useStyles()

  return (
    <Box 
      animate={{ opacity: 1 }}
      component={motion.div}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      sx={styles}
    >
      <Heading />
      <Intro />
      <Career />
      <TechStack />
    </Box>
  )
}
