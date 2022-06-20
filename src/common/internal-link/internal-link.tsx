import * as React from "react"

import { Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

import { useStyles } from "./internal-link.styles"

type Props = {
  children: React.ReactNode
  to: string
}

export function InternalLink(props: Props): JSX.Element {
  const { children, to } = props
  const styles = useStyles()

  return (
    <Link component={RouterLink} to={to} sx={styles}>
      {children}
    </Link>
  )
}
