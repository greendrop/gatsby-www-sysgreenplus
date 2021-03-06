/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title: string
  description?: string
  lang?: string
  meta?: Array<
    | {
        name: string
        content: any
        property?: undefined
      }
    | {
        property: string
        content: any
        name?: undefined
      }
  >
}
const defaultValue = {
  description: ``,
  lang: `ja`,
  meta: [],
}

const SEO: React.FC<Props> = (_props: Props) => {
  const props = (defaultValue && _props) as Props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const title = props.title
  const lang = props.lang
  const metaDescription = props.description || site.siteMetadata.description
  const meta = props.meta || []

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
