import { useTheme } from "@mui/material"

import { usePage } from "@src/hooks"
import { Path } from "@src/root"

export function useBackgroundColor(): string {
  const theme = useTheme()
  const page = usePage()

  switch (page) {
    case Path.Home:
      return theme.palette.home.main
    case Path.About:
      return theme.palette.about.main
    case Path.Contact:
      return theme.palette.contact.main
    case Path.Projects:
      return theme.palette.projects.main
    default:
      return theme.palette.skills.main
  }
}
