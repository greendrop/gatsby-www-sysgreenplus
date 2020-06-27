import React from "react"
import { PageProps } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Layout from "../templates/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Box m={3}>
        <Typography gutterBottom>
          作成したアプリケーションやプロフィールを公開
        </Typography>
      </Box>
    </Layout>
  )
}

export default IndexPage
