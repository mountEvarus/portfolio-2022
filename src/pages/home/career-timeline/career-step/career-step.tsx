import * as React from "react"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Step, StepLabel, Typography } from "@mui/material"

type Props = {
  dates: string
  icon: IconDefinition
  step: string
}

export function CareerStep(props: Props): JSX.Element {
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
