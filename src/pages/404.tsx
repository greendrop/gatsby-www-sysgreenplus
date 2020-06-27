import React from "react"
import { PageProps } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Layout from "../templates/Layout"
import SEO from "../components/organisms/SEO"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO title="Not Found" />
      <Typography variant="h4" gutterBottom>
        Not Found
      </Typography>
    </Layout>
  )
}

export default NotFoundPage
