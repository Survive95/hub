import React, { useEffect, useState } from 'react'
import '../styles/Twitch.css'
import axios from 'axios'
import Streamer from './Streamer'

function Twitch() {

    const [follows, setFollows] = useState([])

    const getUserFollows = function (id) {
        axios.get(`https://api.twitch.tv/helix/users/follows?first=100&from_id=${id}`)
            .then(result => {
                let array = []
                result.data.data.map(item => {
                    array.push(item.to_id)
                })
                setFollows(array)
            })
    }

    const getUser = function () {
        axios.get('https://api.twitch.tv/helix/users?login=survive95')
            .then(result => {
                if (result.data.data.length > 0) {
                    getUserFollows(result.data.data[0].id)
                }
            })
    }

    const getToken = function () {
        axios.post('https://id.twitch.tv/oauth2/token?client_id=qod6dds740bwldj4zi4wyf1l7nqp76&client_secret=xssnymqljly6m9x1zvoxluwctheklo&grant_type=client_credentials')
            .then(result => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.access_token}`
                axios.defaults.headers.common['Client-Id'] = `qod6dds740bwldj4zi4wyf1l7nqp76`
                getUser()
            })
    }

    useEffect(() => {
        getToken()
    }, [])


    return (
        <section className="twitch_container">
            <h1 className="title">Abonnement Twitch</h1>
            <ul className="streamer_list">
                {follows.map((item, index) => {
                    return (
                        <Streamer key={index} id={item}></Streamer>
                    )
                })}
            </ul>
        </section>
    )
}

export default Twitch