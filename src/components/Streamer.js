import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Streamer(props) {

    const [data, setData] = useState([])
    const [logo, setLogo] = useState()
    const [name, setName] = useState([])
    const [status, setStatus] = useState(false)
    const [color, setColor] = useState()

    const getStream = function (image) {
        axios.get(`https://api.twitch.tv/helix/streams/?user_id=${props.id}`)
            .then(result => {
                if (result.data.data.length > 0) {
                    setData(result.data.data[0])
                    setStatus(true)
                }
                else {
                    setStatus(false)
                }
            })
    }

    const getStreamData = function () {
        axios.get(`https://api.twitch.tv/helix/users?id=${props.id}`)
            .then(result => {
                setLogo(result.data.data[0].profile_image_url)
                setName(result.data.data[0].display_name)
                getStream(result.data.data[0].profile_image_url)
            })
    }

    useEffect(() => {
        getStreamData()

        setInterval(() => {
            getStreamData()
        }, 30000);
    }, [])

    return (
        status ? <a href={`https://www.twitch.tv/${data.user_login}`} className={status ? 'streamer_item first' : "streamer_item"}>
            <img src={logo} className="streamer_image"></img>
            <p className="streamer_name">{name}</p>
            {status ? <p className="streamer_game">Joue à {data.game_name}</p> : ''}
        </a> : ''
    )
}

export default Streamer