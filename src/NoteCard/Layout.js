import {
    makeStyles, Drawer, Typography, List, ListItem,
    ListItemIcon, ListItemText, AppBar, Toolbar, Avatar
} from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

const widthofDrawer = 240
const useStyles = makeStyles({
    page: {
        background: 'lightgrey',
        width: '100%'
    },
    drawerpaper: {
        width: widthofDrawer

    },
    drawer: {
        width: widthofDrawer
    },
    main: {
        display: 'flex'
    },
    active: {
        background: 'lightgrey'
    },
    appbar: {
        width: `calc(100% - ${widthofDrawer}px)`
    },
    toolbar: {
        height: `calc(  70px)`
    },
    date:
    {
        marginLeft: 'auto',

    }

})

export default function Layout({ children }) {
    const history = useNavigate()
    const classes = useStyles()
    const location = useLocation()
    const menu = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined />,
            path: '/create'
        }
    ]
    return (
        <div className={classes.main}>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Avatar src="./Material-ui.jpg" />
                    <Typography variant='h3'>
                        Material-UI
                    </Typography>
                    <Typography className={classes.date}>

                        {format(new Date(), 'do MMMM Y')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerpaper }}>
                <div>
                    <Typography variant='h4'>Hello UI</Typography>
                </div>
                <List>
                    {menu.map(item =>
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history(item.path)}
                            className={location.pathname == item.path ? classes.active : null}

                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
                        </ListItem>

                    )}

                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
