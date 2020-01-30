import React from 'react'
import { Grid, Paper } from '@material-ui/core'


function Word(props) {

    const style = props.style

    return (
        <Grid item>
            <Paper style={style.Paper}>
                Word Board
            </Paper>
        </Grid>
    )
}

export default Word