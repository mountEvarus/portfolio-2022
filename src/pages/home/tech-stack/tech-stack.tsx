import * as React from "react"

import { Box, Typography } from "@mui/material"
import Caddy from "@src/assets/caddy.svg"
import Docker from "@src/assets/docker.svg"
import Kotlin from "@src/assets/kotlin.svg"
import Mongo from "@src/assets/mongo.svg"
import Redis from "@src/assets/redis.svg"
import Typescript from "@src/assets/typescript.svg"

import { TechStackItem } from "./tech-stack-item"
import { useStyles } from "./tech-stack.styles"

export function TechStack(): JSX.Element {
  const styles = useStyles()

  return (
    <Box component="section">
      <Typography variant="h3">Current Stack:</Typography>
      <Box sx={styles}>
        <TechStackItem name="Typescript" Svg={Typescript} />
        <TechStackItem name="Kotlin" Svg={Kotlin} />
        <TechStackItem name="Caddy" Svg={Caddy} />
        <TechStackItem name="Mongo" Svg={Mongo} />
        <TechStackItem name="Redis" Svg={Redis} />
        <TechStackItem name="Docker" Svg={Docker} />
      </Box>
    </Box>
  )
}
