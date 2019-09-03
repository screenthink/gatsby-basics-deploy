import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
export default ({
  data: {
    mdx: {
      frontmatter: { title },
      body: content,
    },
  },
}) => (
  <Layout>
    <SEO title={`${title} | Blog`} />
    <h1>{title}</h1>
    <Link to="/blog/">Back to all posts</Link>
    <MDXRenderer>{content}</MDXRenderer>
  </Layout>
)
