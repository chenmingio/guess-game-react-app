import React from 'react'
import { Grid, Paper } from '@material-ui/core'

function Player(props) {
    const playerList = props.playerList
    const style = props.style

    const players = (playerList !== undefined) ?
        (
            playerList.map(function handle_players(player, index) {
                return (
                    <li key={index}>
                        {player.name}: {player.hint}
                    </li>
                )
            })
        ) :
        (
            <li>
                Nobody in room
        </li>
        )

    return (
        <Grid item>
            <Paper style={style.Paper}>
                Player Board
            <ul>{players}</ul>
            </Paper>
        </Grid>
    )
}


export default Player