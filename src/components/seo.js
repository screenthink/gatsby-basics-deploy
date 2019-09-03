import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/use-sitemetadata"

const SEO = ({ title, description, lang = `en` }) => {
  const site = useSiteMetadata()
  const seo = {
    title: title || site.title,
    description: description || site.description,
  }
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={`%s | ${site.title}`}
    >
      <meta name="description" content={site.description} />
    </Helmet>
  )
}

export default SEO
