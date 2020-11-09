import React from "react"
import "../components/index.css"
import Wanted from "./wanted"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Wanted" keywords={[`future`, `super`, `quiz`]} />
    <Wanted />
  </React.Fragment>
)

export default IndexPage
