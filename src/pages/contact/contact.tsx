import * as React from "react"

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Link, Typography } from "@mui/material"

export function Contact(): JSX.Element {
  return (
    <Box sx={{ fontSize: "64px" }}>
      <Typography variant="h2">Contact Information</Typography>
      <Typography sx={{ my: "64px" }}>If you have any questions, contact me through one of the following channels</Typography>
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-evenly" }}>
        <Link color="inherit" href="https://github.com/mountEvarus" target="_blank">
          <FontAwesomeIcon icon={faGithubSquare} />
        </Link>
        <Link color="inherit" href="https://www.linkedin.com/in/evan-hynes-b58544184/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link color="inherit" href="mailto:ewbhynes@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </Box>
      <Typography sx={{ mt: "64px" }} variant="h2">CV</Typography>
      <Typography sx={{ my: "64px" }}>Feel free to look through my CV for more information about my education, experience & skills</Typography>
      <Box sx={{ alignItems: "center", display: "flex", justifyContent: "space-evenly" }}>
        <Link color="inherit" href="placeholder.pdf" download>
          <FontAwesomeIcon icon={faFilePdf} />
        </Link>
      </Box>
    </Box>
  )
}
