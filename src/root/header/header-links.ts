import { IconDefinition, faBriefcase, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons"

import { Path } from "@src/root"

export type HeaderLink = {
  icon: IconDefinition
  name: string
  path: Path
}

export const HeaderLinks: HeaderLink[] = [
  {
    icon: faHouse,
    name: "Home",
    path: Path.Home,
  },
  {
    icon: faBriefcase,
    name: "Projects",
    path: Path.Projects,
  },
  {
    icon: faPhone,
    name: "Contact",
    path: Path.Contact,
  },
]
