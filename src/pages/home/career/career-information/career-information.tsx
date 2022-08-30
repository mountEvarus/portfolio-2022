import * as React from "react"

import { Box, Typography } from "@mui/material"
import { CareerDetails } from "@src/pages/home/career"

import { CareerInfoBlock } from "./career-info-block"
import { useStyles } from "./career-information.styles"

export function CareerInformation(): JSX.Element {
  const styles = useStyles()

  return (
    <Box component="section">
      <Typography sx={styles} variant="h3">
        Professional Career:
      </Typography>
      <Box>
        {CareerDetails.map((details, index) => {
          return (
            <CareerInfoBlock key={index} {...details} />
          )
        })}
      </Box>
    </Box>
  )
}
