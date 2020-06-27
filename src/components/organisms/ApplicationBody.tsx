import React from "react"
import Box from "@material-ui/core/Box"
import ApplicationItem from "../../components/molecules/ApplicationItem"

const items = [
  {
    title: "Webサイト",
    to: null,
    description: "このサイトです。",
    technology: "TypeScript, React, Gatsby.js, Material-UI",
    sourceTo: "https://github.com/gatsby-www-sysgreenplus",
  },
  {
    title: "Amazon自動検索",
    to: null,
    description: "Amazon APIの仕様変更により、クローズしました。",
    technology:
      "Ruby, JavaScript, Ruby on Rails, Amazon Product Advertising API, Vue.js, Bootstrap",
    sourceTo: "https://github.com/greendrop/amaas2",
  },
  {
    title: "SkyWayサンプル",
    to: "https://nuxt-skyway-sample.dev.sysgreenplus.net",
    description: "Amazon APIの仕様変更により、クローズしました。",
    technology: "JavaScript, Vue.js, Nuxt.js, Vuetify, SkyWay",
    sourceTo: "https://github.com/greendrop/nuxt-skyway-sample",
  },
  {
    title: "星座占い",
    to: "https://fortune.sysgreenplus.net/",
    description: null,
    technology:
      "JavaScript, Vue.js, Nuxt.js, Vuetify, 占い配信 Web ad Fortune 無料版API",
    sourceTo: "https://github.com/greendrop/web-ad-fortune",
  },
  {
    title: "AEDマップ",
    to: "https://aed-map.sysgreenplus.net/",
    description: null,
    technology:
      "JavaScript, Vue.js, Nuxt.js, Vuetify, Leaflet, AEDオープンデータAPI",
    sourceTo: "https://github.com/greendrop/aed-map",
  },
]

const ApplicationBody: React.FC = () => {
  return (
    <React.Fragment>
      {items.map(({ title, to, description, technology, sourceTo }) => {
        return (
          <Box my={3} key={title}>
            <ApplicationItem
              title={title}
              to={to}
              description={description}
              technology={technology}
              sourceTo={sourceTo}
            />
          </Box>
        )
      })}
    </React.Fragment>
  )
}

export default ApplicationBody
