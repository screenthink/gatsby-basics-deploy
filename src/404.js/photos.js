import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import team from "../images/team-image.jpg"
// import Arrow from "../images/ui-arrow.svg"

const Photos = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      image: file(relativePath: { eq: "moon-01.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <SEO title="Photos" />
      <Img fluid={data.image.childImageSharp.fluid} alt="" />
      <h2>Photos</h2>
      <div className="gallery">
        {data.images.nodes.map(image => (
          <Img key={image.id} fixed={image.childImageSharp.fixed} />
        ))}
      </div>
    </Layout>
  )
}

export default Photos
