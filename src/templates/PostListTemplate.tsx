import React from "react"
import { PageProps, graphql, navigate } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Pagination from "@material-ui/lab/Pagination"
import Layout from "./Layout"
import SEO from "../components/organisms/SEO"
import PostListItem from "../components/molecules/PostListItem"

type DataType = {
  allMdx: {
    edges: [
      {
        node: {
          excerpt: string
          fields: {
            kind: string
            slug: string
          }
          frontmatter: {
            date: string
            title: string
            description: string
          }
        }
      }
    ]
  }
}

type PageContextType = {
  title: string
  kind: string
  limit: number
  skip: number
  numPages: number
  currentPage: number
}

const PostListTemplate: React.FC<PageProps<DataType, PageContextType>> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMdx.edges
  console.log(pageContext)

  return (
    <React.Fragment>
      <Layout>
        <SEO title={pageContext.title} />
        <Box my={3}>
          <Typography variant="h4" gutterBottom>
            {pageContext.title}
          </Typography>
        </Box>

        <Box my={3}>
          {posts.map(({ node }) => {
            const kind = node.fields.kind
            const slug = node.fields.slug
            const title = node.frontmatter.title
            const excerpt = node.excerpt

            return (
              <Box key={`${kind}/${slug}`} my={3}>
                <PostListItem
                  kind={kind}
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                />
              </Box>
            )
          })}
        </Box>
        {pageContext.numPages > 1 && (
          <Grid container justify="center">
            <Grid container item xs={12} justify="center">
              <Pagination
                count={pageContext.numPages}
                page={pageContext.currentPage}
                onChange={(event, page) => {
                  if (page === 1) {
                    navigate(`/${pageContext.kind}/`)
                  } else {
                    navigate(`/${pageContext.kind}/${page}/`)
                  }
                }}
              />
            </Grid>
          </Grid>
        )}
      </Layout>
    </React.Fragment>
  )
}

const pageQuery = graphql`
  query PostListQuery($kind: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fields: { kind: { eq: $kind } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            kind
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            description
          }
        }
      }
    }
  }
`

export default PostListTemplate
export { pageQuery }
