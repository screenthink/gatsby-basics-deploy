import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListing = () => {
  const data = useStaticQuery(graphql`
    query BlogListingQuery {
      allMdx(sort: { fields: frontmatter___data, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            slug
            excerpt
            data(formatString: "MM.DD.YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog Posts</h1>
      {posts.map(({ id, frontmatter: { title, slug, excerpt } }) => (
        <article key={id}>
          <h3>
            <Link to={`blog/${slug}`}>{title}</Link>
          </h3>
          <p>{excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export default BlogListing
