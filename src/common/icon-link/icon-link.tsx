import * as React from "react"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@mui/material"

import { useStyles } from "./icon-link.styles"

type Props = {
  download?: boolean
  icon: IconDefinition
  link: string
}

export function IconLink(props: Props): JSX.Element {
  const { icon, link } = props
  const download = props.download ?? false
  const target = download ? "_self" : "_blank"
  const styles = useStyles()

  return (
    <Link color="inherit" download={download} href={link} sx={styles} target={target}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
