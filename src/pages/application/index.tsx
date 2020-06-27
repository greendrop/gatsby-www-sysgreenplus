import React from "react"
import { PageProps } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Layout from "../../templates/Layout"
import SEO from "../../components/organisms/SEO"
import ApplicationBody from "../../components/organisms/ApplicationBody"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Application" />
      <Box my={3}>
        <Typography variant="h4" gutterBottom>
          Application
        </Typography>
      </Box>
      <Box my={3}>
        <ApplicationBody />
      </Box>
    </Layout>
  )
}

export default IndexPage
