import { useTheme } from "@mui/material"

import { usePage } from "@src/hooks"
import { Path } from "@src/root"

export function useBackgroundColor(): string {
  const theme = useTheme()
  const page = usePage()

  switch (page) {
    case Path.Contact:
      return theme.palette.contact.main
    case Path.Projects:
      return theme.palette.projects.main
    default:
      return theme.palette.home.main
  }
}
