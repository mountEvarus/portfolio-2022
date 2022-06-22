// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    contact: Palette["primary"]
    experience: Palette["primary"]
    home: Palette["primary"]
    marginal: Palette["primary"]
    projects: Palette["primary"]
  }
  interface PaletteOptions {
    contact: PaletteOptions["primary"]
    experience: PaletteOptions["primary"]
    home: PaletteOptions["primary"]
    marginal: PaletteOptions["primary"]
    projects: PaletteOptions["primary"]
  }
}
