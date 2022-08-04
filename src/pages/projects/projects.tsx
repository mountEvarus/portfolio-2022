import * as React from "react"

import { Box } from "@mui/material"
import Placeholder from "@src/assets/test.png"
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
      <ProjectCard
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lorem sed tellus tristique tempus. Suspendisse potenti. Nulla ac accumsan metus. Sed semper risus nec ante finibus sagittis. Curabitur id consequat est. Etiam quis imperdiet massa. Praesent vulputate tellus eu nulla sollicitudin, at tristique eros efficitur. Nullam tincidunt vitae purus nec viverra. Nullam finibus mauris vel dolor vestibulum interdum."
        githubLink="https://google.com"
        heading="CLI Tools"
        image={Placeholder}
        siteLink="https://google.com"
      />
      <ProjectCard
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lorem sed tellus tristique tempus. Suspendisse potenti. Nulla ac accumsan metus. Sed semper risus nec ante finibus sagittis. Curabitur id consequat est. Etiam quis imperdiet massa. Praesent vulputate tellus eu nulla sollicitudin, at tristique eros efficitur. Nullam tincidunt vitae purus nec viverra. Nullam finibus mauris vel dolor vestibulum interdum."
        githubLink="https://google.com"
        heading="Kotlin API (???)"
        image={Placeholder}
        siteLink="https://google.com"
      />
      <ProjectCard
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lorem sed tellus tristique tempus. Suspendisse potenti. Nulla ac accumsan metus. Sed semper risus nec ante finibus sagittis. Curabitur id consequat est. Etiam quis imperdiet massa. Praesent vulputate tellus eu nulla sollicitudin, at tristique eros efficitur. Nullam tincidunt vitae purus nec viverra. Nullam finibus mauris vel dolor vestibulum interdum."
        githubLink="https://google.com"
        heading="Vibeplayer"
        image={Placeholder}
        siteLink="https://google.com"
      />
      <ProjectCard
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lorem sed tellus tristique tempus. Suspendisse potenti. Nulla ac accumsan metus. Sed semper risus nec ante finibus sagittis. Curabitur id consequat est. Etiam quis imperdiet massa. Praesent vulputate tellus eu nulla sollicitudin, at tristique eros efficitur. Nullam tincidunt vitae purus nec viverra. Nullam finibus mauris vel dolor vestibulum interdum."
        githubLink="https://google.com"
        heading="Crate diggers"
        image={Placeholder}
        siteLink="https://google.com"
      />
    </Box>
  )
}
