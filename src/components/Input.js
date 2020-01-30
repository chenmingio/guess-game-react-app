import React from 'react'
import { Grid, Paper } from '@material-ui/core'


function Input(props) {

    const style = props.style

    return (
        <Grid item>
            <Paper style={style.Paper}>
                Input Zone
            </Paper>
        </Grid>
    )
}

export default Input