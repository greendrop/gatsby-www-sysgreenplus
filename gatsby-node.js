const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const kinds = [{ value: "news", title: "News" }]
  const postListTemplate = path.resolve(`./src/templates/PostListTemplate.tsx`)
  const postDetailTemplate = path.resolve(
    `./src/templates/PostDetailTemplate.tsx`
  )

  kinds.forEach(async kind => {
    const result = await graphql(
      `
        {
          allMdx(
            filter: { fields: { kind: { eq: "${kind.value}" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  kind
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    )

    if (result.errors) {
      throw result.errors
    }

    // Create pages.
    const posts = result.data.allMdx.edges
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${kind.value}` : `/${kind.value}/${i + 1}`,
        component: postListTemplate,
        context: {
          kind: kind.value,
          title: kind.title,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/${post.node.fields.kind}${post.node.fields.slug}`,
        component: postDetailTemplate,
        context: {
          kind: post.node.fields.kind,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `kind`,
      node,
      value: node.frontmatter.kind,
    })

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
