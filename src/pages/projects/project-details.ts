import TypescriptHelpersImage from "@src/assets/typescript-helpers.png"

export type ProjectDetails = {
  description: string
  githubLink: string
  heading: string
  image: string
  siteLink?: string
}

export const ProjectDetails: ProjectDetails[] = [
  {
    description: "This is a package for typescript helper function and extensions that I have found myself creating in multiple projects.",
    githubLink: "https://github.com/mountEvarus/typescript-extended",
    heading: "Typescript Extended",
    image: TypescriptHelpersImage,
    siteLink: "https://www.npmjs.com/package/@evan-abc/typescript-helpers",
  },
]
