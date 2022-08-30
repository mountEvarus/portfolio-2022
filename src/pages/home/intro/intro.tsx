import * as React from "react"

import { Box, Typography } from "@mui/material"

import { useStyles } from "./intro.styles"

export function Intro(): JSX.Element {

  const styles = useStyles()

  return <Box component="section">
    <Typography variant="h3">About Me:</Typography>
    <Box sx={styles}>
      <Typography>
      I am a 1st class BSc Physics graduate from Univsersity College London (UCL) who moved into software development after taking some optional courses in Java & Python.
      </Typography>
      <Typography>
      I undertook a frontend Software Development Course by _nology in the following months to bootstrap my skills in HTML, CSS, Javascript, React & Git. 
      I used these skills to get a job at the privacy-focused ad tech startup, Glimpse Protocol. At Glimpse, I undertook various projects, strengthening my full-stack knowledge.
      </Typography>
      <Typography>
        This portfolio showcases some of my skills, projects & contact information. My CV, available on the contact page, provides more information about my experience & skills I have picked up along the way.
      </Typography>
    </Box>
  </Box>
}
