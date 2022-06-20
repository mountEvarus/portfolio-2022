// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    about: Palette["primary"]
    contact: Palette["primary"]
    home: Palette["primary"]
    marginal: Palette["primary"]
    projects: Palette["primary"]
    skills: Palette["primary"]
  }
  interface PaletteOptions {
    about: PaletteOptions["primary"]
    contact: PaletteOptions["primary"]
    home: PaletteOptions["primary"]
    marginal: PaletteOptions["primary"]
    projects: PaletteOptions["primary"]
    skills: PaletteOptions["primary"]
  }
}
