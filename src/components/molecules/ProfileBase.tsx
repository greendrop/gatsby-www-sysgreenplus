import React from "react"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Icon from "@material-ui/core/Icon"

type Item = {
  text: string
  iconClass: string
  to?: string
  secondaryText?: string
}

type Props = {
  title: string
  items: Array<Item>
}

const ProfileBase: React.FC<Props> = ({ title, items }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <List>
          {items.map(item => {
            const enableBotton = item.to ? true : false

            return (
              <ListItem
                key={item.text}
                button={enableBotton}
                onClick={() => {
                  if (enableBotton) {
                    window.open(item.to, "_blank")
                  }
                }}
              >
                <ListItemIcon>
                  <Icon className={item.iconClass} />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  secondary={item.secondaryText}
                />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default ProfileBase
