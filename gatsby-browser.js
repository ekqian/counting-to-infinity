// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"
// convert to Latex
import "katex/dist/katex.min.css"
// Mafs for math visualization
import "mafs/core.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export { wrapRootElement } from "./src/components/mdx-provider"
