import React from "react"
import { PageProps, navigate, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import Layout from "./Layout"
import SEO from "../components/organisms/SEO"

type DataType = {
  mdx: {
    id: string
    excerpt: string
    body: string
    frontmatter: {
      title: string
      date: string
      description: string
    }
  }
}

type PageContextType = {
  slug: string
  previous: {
    fields: {
      kind: string
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
  next: {
    fields: {
      kind: string
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
)

const PostDetailTemplate: React.FC<PageProps<DataType, PageContextType>> = ({
  data,
  pageContext,
}) => {
  const post = data.mdx
  const { previous, next } = pageContext
  const classes = useStyles()

  return (
    <React.Fragment>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Box my={3}>
          <Typography variant="h4" gutterBottom>
            {post.frontmatter.title}
          </Typography>
        </Box>
        <Box my={3}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Box>
        <Grid container justify="center">
          <Grid container item xs={12} justify="center">
            <Box my={3} className={classes.navigation}>
              <IconButton
                disabled={previous ? false : true}
                onClick={() => {
                  if (previous) {
                    navigate(`/${previous.fields.kind}${previous.fields.slug}`)
                  }
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                disabled={next ? false : true}
                onClick={() => {
                  if (next) {
                    navigate(`/${next.fields.kind}${next.fields.slug}`)
                  }
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </React.Fragment>
  )
}

const pageQuery = graphql`
  query PostBySlug($kind: String!, $slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { kind: { eq: $kind }, slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        kind
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`

export default PostDetailTemplate
export { pageQuery }
