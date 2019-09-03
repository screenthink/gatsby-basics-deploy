import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import team from "../images/team-image.jpg"
import Arrow from "../images/ui-arrow.svg"

export default () => (
  <Layout>
    <SEO title="About" />
    <h2>About</h2>
    <p>Etiam porta sem malesuada magna mollis euismod.</p>
    <Arrow />
    <img src={team} alt="" />
  </Layout>
)
