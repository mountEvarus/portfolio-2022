import * as React from "react"

import { Navigate } from "react-router-dom"

import { Path } from "@src/root"

export function NotFound(): JSX.Element {
  return <Navigate to={Path.Home} />
}
