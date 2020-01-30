import React, { useState, Component } from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'
import Player from './Player'
import Word from './Word'
import Input from './Input'


const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

function Main() {
    const [room, setRoom] = useState(null)
    const [playerList, setPlayerList] = useState(
        [
            {
                name: "CM",
                is_guesser: true,
                hint: "sad"
            }, {
                name: "OO",
                is_guesser: false,
                hint: "happy"
            }
        ]
    )

    return (
        <Grid container>
            <Header room={room} />
            <Player style={style.Paper} playerList={playerList} />
            <Word style={style} />
            <Input style={style} />
        </Grid>
    )
}

export default Main