import CliUtilsImage from "@src/assets/cli-utils.png"
import TypescriptHelpersImage from "@src/assets/typescript-helpers.png"
import VibeplayerImage from "@src/assets/vibeplayer.png"

export type ProjectDetails = {
  description: string
  githubLink: string
  heading: string
  image: string
  siteLink?: string
}

export const ProjectDetails: ProjectDetails[] = [
  {
    description: `
This is a package for typescript helper function and extensions that I have found myself creating in multiple projects.

There are extension methods for arrays, booleans, numbers, objects & strings.

There are currently helper functions for assert and wait.
`,
    githubLink: "https://github.com/mountEvarus/typescript-extended",
    heading: "Typescript Extended",
    image: TypescriptHelpersImage,
    siteLink: "https://www.npmjs.com/package/@evan-abc/typescript-helpers",
  },
  {
    description: `
This is a utils project which provides several utilities:

Backups - backup a directory from a local folder to a remote one over ssh.
Directories - log files from a directory, or remvove all of a filetype from a directory.
Music - list music files from an m3u platlist, copy files & check which ones are missing metadata.
    `,
    githubLink: "https://github.com/mountEvarus/cli-tools",
    heading: "CLI Utils",
    image: CliUtilsImage,
  },
  {
    description: `
This project is a browser based music visualiser.

Upload any of your music files, or clone the repo and use the sample music provided.

There are 3 different waveforms to pick from and with each you can change the color palette and fourier transform size (aka how many data points to use).
    `,
    githubLink: "https://github.com/mountEvarus/vibeplayer",
    heading: "Vibeplayer",
    image: VibeplayerImage,
    siteLink: "https://vibeplayer.hynes.app/",
  },
]
