import { IconDefinition , faAtom, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons"

export type CareerDetails = {
  dates: string
  icon: IconDefinition
  step: string
}

export const CareerDetails: CareerDetails[] = [
  {
    dates: "2017 - 2020",
    icon: faAtom,
    step: "Physics BSc, University College London",
  },
  {
    dates: "September 2020 - November 2020",
    icon: faCode,
    step: "_nology Frontend Software Development Course",
  },
  {
    dates: "February 2021 - Present",
    icon: faBriefcase,
    step: "Software Engineer, Glimpse Protocol",
  },
]
