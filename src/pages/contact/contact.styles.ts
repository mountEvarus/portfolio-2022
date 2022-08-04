import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type ContactStyles = {
  linkBoxStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  paragraphStyles: SxProps<Theme>
}

export function useStyles(): ContactStyles {
  const query = useScreenSizeQuery("sm", "min-width")

  return {
    linkBoxStyles: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
      mb: query ? "64px" : "40px",
    },
    outerBoxStyles: {
      fontSize: query ? "64px" : "40px",
      maxWidth: "2560px",
      m: "auto",
    },
    paragraphStyles: {
      fontSize: "2rem",
      my: query ? "64px" : "40px",
    },
  }
}
