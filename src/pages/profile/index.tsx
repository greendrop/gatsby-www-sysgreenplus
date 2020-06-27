import React from "react"
import { PageProps } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Layout from "../../templates/Layout"
import SEO from "../../components/organisms/SEO"
import ProfileBody from "../../components/organisms/ProfileBody"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Profile" />
      <Box my={3}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
      </Box>
      <Box my={3}>
        <ProfileBody />
      </Box>
    </Layout>
  )
}

export default IndexPage
