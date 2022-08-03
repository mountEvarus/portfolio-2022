import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Step, StepLabel, Typography } from "@mui/material"
import { CareerDetails } from "@src/pages/home/career"

export function CareerStep(props: CareerDetails): JSX.Element {
  const { dates, icon, step } = props

  return (
    <Step>
      <StepLabel StepIconComponent={() => <FontAwesomeIcon icon={icon} />}>
        <Typography variant="h6">{step}</Typography>
        <Typography>({dates})</Typography>
      </StepLabel>
    </Step>
  )
}
