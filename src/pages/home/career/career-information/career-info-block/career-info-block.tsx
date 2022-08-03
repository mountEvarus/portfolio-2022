import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Typography } from "@mui/material"
import { CareerDetails } from "@src/pages/home/career"

import { useStyles } from "./career-info-block.styles"

export function CareerInfoBlock(props: CareerDetails): JSX.Element {
  const { dates, icon, step } = props
  const { outerBoxStyles, typographyStyles } = useStyles()

  return (
    <Box component="section" sx={outerBoxStyles}>
      <FontAwesomeIcon icon={icon} />
      <Typography sx={typographyStyles}>{step} ({dates})</Typography>
    </Box>
  )
}
