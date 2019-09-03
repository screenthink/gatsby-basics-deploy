const path = require("path")

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const postsQuery = await graphql(`
    query PostsQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (postsQuery.errors) {
    reporter.panic("Unable to create posts", postQuery.errors)
  }

  const posts = postsQuery.data.allMdx.nodes

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
