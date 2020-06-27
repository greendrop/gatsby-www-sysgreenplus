import React from "react"
import Container from "@material-ui/core/Container"
import Header from "../components/organisms/Header"

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md">{children}</Container>
    </React.Fragment>
  )
}

export default Layout
