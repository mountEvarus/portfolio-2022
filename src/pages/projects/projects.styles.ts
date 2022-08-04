import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type ProjectStyles = {
  outerBoxStyles: SxProps<Theme>
}

export function useStyles(): ProjectStyles {
  const extraLargeQuery = useScreenSizeQuery("xl", "min-width")
  const largeQuery = useScreenSizeQuery("lg", "min-width")
  const mediumQuery = useScreenSizeQuery("md", "min-width")
  const smallQuery = useScreenSizeQuery("sm", "min-width")

  return {
    outerBoxStyles: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      gap: extraLargeQuery 
        ? "512px" 
        : largeQuery 
          ? "256px"
          : mediumQuery
            ? "128px"
            : smallQuery
              ? "64px" : "32px",
      height: "100%",
      justifyContent: "space-evenly",
      maxWidth: "2560px",
      mx: "auto",
    },
  }
}
