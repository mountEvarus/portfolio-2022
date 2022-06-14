import * as React from "react"

import { App } from "@src/app"
import * as ReactDom from "react-dom"

ReactDom.render(<App />, document.getElementById("root"))

if (module.hot) {
  module.hot.accept()
}
