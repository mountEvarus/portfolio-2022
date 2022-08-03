import * as React from "react"

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { Box, Typography } from "@mui/material"

import { useStyles } from "./contact.styles"
import { IconLink } from "./icon-link"

export function Contact(): JSX.Element {
  const { linkBoxStyles, outerBoxStyles, paragraphStyles } = useStyles()

  return (
    <Box sx={outerBoxStyles}>
      <Typography variant="h2">Contact Information</Typography>
      <Typography sx={paragraphStyles}>If you have any questions, contact me through one of the following channels</Typography>
      <Box sx={linkBoxStyles}>
        <IconLink icon={faGithubSquare} link="https://github.com/mountEvarus" />
        <IconLink icon={faLinkedin} link="https://www.linkedin.com/in/evan-hynes-b58544184/" />
        <IconLink icon={faEnvelope} link="mailto:ewbhynes@gmail.com" />
      </Box>
      <Typography variant="h2">CV</Typography>
      <Typography sx={paragraphStyles}>Feel free to look through my CV for more information about my education, experience & skills</Typography>
      <Box sx={linkBoxStyles}>
        <IconLink download icon={faFilePdf} link="placeholder.pdf" />
      </Box>
    </Box>
  )
}
