import React from "react"
import { navigate } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

type Props = {
  kind: string
  slug: string
  title: string
  excerpt: string
}

const NewsListItem: React.FC<Props> = ({ kind, slug, title, excerpt }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{excerpt}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/${kind}${slug}`)
          }}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  )
}

export default NewsListItem
