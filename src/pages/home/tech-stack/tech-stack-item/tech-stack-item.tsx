import * as React from "react"

import { IconButton, Tooltip } from "@mui/material"

import { useStyles } from "./tech-stack-item.styles"

type Props = {
  name: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export function TechStackItem(props: Props): JSX.Element {
  const { name, Svg } = props
  const { svgStyles, tooltipStyles } = useStyles()

  return (
    <Tooltip title={name} sx={tooltipStyles}>
      <IconButton disableRipple={true}>
        <Svg style={svgStyles} />
      </IconButton>
    </Tooltip>
  )
}
