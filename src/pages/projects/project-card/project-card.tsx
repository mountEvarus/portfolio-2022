import * as React from "react"

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCircleInfo, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Card, Typography } from "@mui/material"
import { ProjectDetails } from "@src/pages/projects"

import { IconLink } from "@src/common"

import { useStyles } from "./project-card.styles"

export function ProjectCard(props: ProjectDetails): JSX.Element {
  const { description, githubLink, heading, image, siteLink } = props
  const [descriptionTabOpen, setIsDescriptionTabOpen] = React.useState(false)

  const {
    descriptionTextStyles,
    headingBoxStyles,
    imageStyles,
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
      <img src={image} style={imageStyles} />
      <Box sx={headingBoxStyles}>
        <Typography variant="h4">{heading}</Typography>
        <FontAwesomeIcon
          icon={faCircleInfo}
          onClick={toggleDescription}
          style={infoIconStyles}
        />
      </Box>
      <Box sx={linkBoxStyles}>
        <IconLink icon={faGithub} link={githubLink} />
        {siteLink && <IconLink icon={faGlobe} link={siteLink} />}
      </Box>
    </Card>
  )
}
