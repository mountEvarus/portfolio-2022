import * as React from "react"

import { Box, CssBaseline, ThemeProvider } from "@mui/material"

import { Footer, Header } from "@src/common"
import { Main } from "@src/main"
import { useColorContext } from "@src/providers"
import { getDefaultTheme } from "@src/theme"

import { useStyles } from "./root.styles"

export function Root(): JSX.Element {
  const { mode } = useColorContext()
  const styles = useStyles()
  const theme = React.useMemo(() => getDefaultTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles}>
        <Header />
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
