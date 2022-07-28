import * as React from "react"

import { Box } from "@mui/material"
import Placeholder from "@src/assets/test.png"

import { ProjectCard } from "./project-card"

export function Projects(): JSX.Element {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "grid",
        gap: "48px",
        gridTemplateColumns: "1fr 1fr",
        height: "100%",
        justifyItems: "center",
        mx: "auto",
      }}
    >
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
        heading="Typescript Extended"
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
