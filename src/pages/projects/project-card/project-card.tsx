import * as React from "react"

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCircleInfo, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Card, Typography } from "@mui/material"

import { useStyles } from "./project-card.styles"

type Props = {
  description: string
  githubLink: string
  heading: string
  image: string
  siteLink?: string
}

export function ProjectCard(props: Props): JSX.Element {
  const { description, githubLink, heading, image, siteLink } = props
  const [descriptionTabOpen, setIsDescriptionTabOpen] = React.useState(false)

  const {
    descriptionTextStyles,
    headingBoxStyles,
    infoIconStyles,
    linkBoxStyles,
    outerBoxStyles,
  } = useStyles(descriptionTabOpen)

  function toggleDescription() {
    setIsDescriptionTabOpen((state) => !state)
  }

  return (
    <Card sx={outerBoxStyles}>
      <Typography sx={descriptionTextStyles}>{description}</Typography>
      <img src={image} height="250px" width="480px" />
      <Box sx={headingBoxStyles}>
        <Typography variant="h4">{heading}</Typography>
        <FontAwesomeIcon
          icon={faCircleInfo}
          onClick={toggleDescription}
          style={infoIconStyles}
        />
      </Box>
      <Box sx={linkBoxStyles}>
        <Box component="a" href={githubLink} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Box>
        {siteLink && (
          <Box component="a" href={siteLink} target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
          </Box>
        )}
      </Box>
    </Card>
  )
}
