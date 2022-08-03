import * as React from "react"

import { useScreenSizeQuery } from "@src/hooks"

import { CareerInformation } from "./career-information"
import { CareerTimeline } from "./career-timeline"

export function Career(): JSX.Element {
  const query = useScreenSizeQuery("sm", "min-width")

  return query
    ? <CareerTimeline />
    : <CareerInformation />
}
