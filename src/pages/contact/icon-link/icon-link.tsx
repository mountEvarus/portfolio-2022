import * as React from "react"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@mui/material"

type Props = {
  download?: boolean
  icon: IconDefinition
  link: string
}

export function IconLink(props: Props): JSX.Element {
  const { icon, link } = props
  const download = props.download ?? false
  const target = download ? "_self" : "_blank"

  return (
    <Link color="inherit" download={download} href={link} target={target}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
