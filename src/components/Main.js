import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'
import Player from './Player'
import Word from './Word'
import Input from './Input'


const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

class Main extends Component {
    state = {
        room: 106,
        playerList: [
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
    }

    componentDidMount() {
        // update the state
    }

    render() {
        const { room, playerList } = this.state

        return (
            <Grid container>
                <Header room={room} />
                <Player style={style.Paper} playerList={playerList} />
                <Word style={style} />
                <Input style={style} />
            </Grid>
        )
    }

}

export default Main