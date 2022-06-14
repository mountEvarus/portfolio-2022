import * as React from "react"

import { useYear } from "@src/hooks"
import { Route, Routes, Link } from "react-router-dom"

import { Path } from "./path"

export function Root(): JSX.Element {
  const year = useYear()

  return (
    <>
      <header>
        <Link to={Path.Home}>Home</Link>
        <Link to={Path.About}>About</Link>
        <Link to={Path.Skills}>Skills</Link>
        <Link to={Path.Projects}>Projects</Link>
        <Link to={Path.Contact}>Contact</Link>
      </header>
      <main>
        <Routes>
          <Route path={Path.Home} element={<p>Home page</p>} />
          <Route path={Path.About} element={<p>About page</p>} />
          <Route path={Path.Skills} element={<p>Skills page</p>} />
          <Route path={Path.Projects} element={<p>Projects page</p>} />
          <Route path={Path.Contact} element={<p>Contact page</p>} />
        </Routes>
      </main>
      <footer>© Evan Hynes, {year}</footer>
    </>
  )
}
