import { Box } from "@mui/material"
import * as React from "react"

import { useYear } from "@src/hooks"

export function Footer(): JSX.Element {
  const year = useYear()

  return (<Box
    component="footer"
    sx={{
      backgroundColor: "red",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      p: "12px 16px",
    }}
  >
    © Evan Hynes, {year}
  </Box>
  )
}
