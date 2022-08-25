import { Theme } from "@mui/material"
import { SxProps } from "@mui/system"

import { useScreenSizeQuery } from "@src/hooks"

type ContactStyles = {
  linkBoxStyles: SxProps<Theme>
  outerBoxStyles: SxProps<Theme>
  paragraphStyles: SxProps<Theme>
}

export function useStyles(): ContactStyles {
  const query = useScreenSizeQuery("md", "min-width")

  return {
    linkBoxStyles: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-evenly",
      mb: query ? "24px" : "32px",
    },
    outerBoxStyles: {
      fontSize: "40px",
    },
    paragraphStyles: {
      my: query ? "24px" : "32px",
    },
  }
}
