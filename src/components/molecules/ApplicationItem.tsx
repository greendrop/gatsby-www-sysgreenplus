import React from "react"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Link from "../atoms/Link"

type Props = {
  title: string
  to?: string
  description?: string
  technology?: string
  sourceTo?: string
}

const ApplicationItem: React.FC<Props> = ({
  title,
  to,
  description,
  technology,
  sourceTo,
}) => {
  return (
    <Card>
      <CardContent>
        {to && (
          <Typography variant="h5">
            <Link to={to} target="_blank">
              {title}
            </Link>
          </Typography>
        )}
        {!to && <Typography variant="h5">{title}</Typography>}
        {description && <Typography>{description}</Typography>}
        {sourceTo && (
          <Typography>
            <Link to={sourceTo} target="_balnk">
              {sourceTo}
            </Link>
          </Typography>
        )}
        {technology && <Typography>{technology}</Typography>}
      </CardContent>
    </Card>
  )
}

export default ApplicationItem
