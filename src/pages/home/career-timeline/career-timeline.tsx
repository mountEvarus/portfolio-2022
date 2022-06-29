import * as React from "react"

import { faAtom, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons"
import { Box, Stepper, Typography } from "@mui/material"

import { CareerStep } from "./career-step"
import { useStyles } from "./career-timeline.styles"

export function CareerTimeline(): JSX.Element {
  const { headingStyles, outerBoxStyles, stepperStyles } = useStyles()

  return (
    <Box component="section" sx={outerBoxStyles}>
      <Typography sx={headingStyles} variant="h3">
        Professional Career:
      </Typography>
      <Stepper alternativeLabel sx={stepperStyles}>
        {/* Necessary to call the element like this when it's the first step in a stepper,
        in order to stop odd stepper behaviour
         see https://github.com/mui/material-ui/issues/12668 for discussion */}
        {CareerStep({
          dates: "2017 - 2020",
          icon: faAtom,
          step: "Physics BSc, University College London",
        })}
        <CareerStep
          dates="September 2020 - November 2020"
          icon={faCode}
          step="_nology Frontend Software Development Course"
        />
        <CareerStep
          dates="February 2021 - Present"
          icon={faBriefcase}
          step="Software Engineer, Glimpse Protocol"
        />
      </Stepper>
    </Box>
  )
}
