import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header(props) {
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        ROOM {props.room}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header