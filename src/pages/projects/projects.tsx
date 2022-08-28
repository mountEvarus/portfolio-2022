import * as React from "react"

import { Box } from "@mui/material"
import { motion } from "framer-motion"

import { ProjectCard } from "./project-card"
import { ProjectDetails } from "./project-details"
import { useStyles } from "./projects.styles"

export function Projects(): JSX.Element {
  const { outerBoxStyles } = useStyles()

  return (
    <Box
      animate={{ opacity: 1 }}
      component={motion.div}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      sx={outerBoxStyles}
    >
      {ProjectDetails.map((details, index) => {
        return <ProjectCard key={index} {...details} />
      })}
    </Box>
  )
}
