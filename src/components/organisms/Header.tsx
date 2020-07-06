import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"

const menuItems = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "APPLICATION",
    to: "/application",
  },
  {
    title: "PROFILE",
    to: "/profile",
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

const Header: React.FC = () => {
  const classes = useStyles()
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {site.siteMetadata.title}
          </Typography>
          <Hidden xsDown>
            {menuItems.map(({ title, to }) => {
              return (
                <Button
                  key={title}
                  color="inherit"
                  onClick={() => navigate(to)}
                >
                  {title}
                </Button>
              )
            })}
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={handleMenu} color="inherit">
              <Icon className="fas fa-ellipsis-v" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {menuItems.map(({ title, to }) => {
                return (
                  <MenuItem
                    key={title}
                    onClick={() => {
                      handleClose()
                      navigate(to)
                    }}
                  >
                    {title}
                  </MenuItem>
                )
              })}
            </Menu>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default Header
