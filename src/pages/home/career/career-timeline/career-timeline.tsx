import * as React from "react"

import { Box, Stepper, Typography } from "@mui/material"
import { CareerDetails } from "@src/pages/home/career"

import { CareerStep } from "./career-step"
import { useStyles } from "./career-timeline.styles"

export function CareerTimeline(): JSX.Element {
  const { headingStyles, stepperStyles } = useStyles()

  return (
    <Box component="section">
      <Typography sx={headingStyles} variant="h3">
        Professional Career:
      </Typography>
      <Stepper alternativeLabel sx={stepperStyles}>
        {CareerDetails.map(details => {
          {/* 
            Necessary to call the element like this when it's the first step in a stepper,
            in order to stop odd stepper behaviour
            see https://github.com/mui/material-ui/issues/12668 for discussion 
          */}
          return CareerStep(details)
        })}
      </Stepper>
    </Box>
  )
}
