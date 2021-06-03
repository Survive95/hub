import React, { useEffect, useState } from 'react'
import date from 'date-and-time';
import fr from 'date-and-time/locale/fr'
import '../styles/Clock.css'

function Clock() {

    const [time, setTime] = useState('0')
    const [dateNow, setDateNow] = useState('null')

    const [theme, setTheme] = useState(true)

    const getTime = function () {
        const now = new Date()
        date.locale(fr)
        let time = date.format(now, 'HH:mm')
        let dateNow = date.format(now, 'dddd, DD/MM/YYYY')
        setTime(time)
        setDateNow(dateNow)
    }

    const handleTheme = function(){
        if(theme){
            setTheme(false)
            document.querySelector('html').setAttribute('theme', 'white')
        }
        else{
            setTheme(true)
            document.querySelector('html').setAttribute('theme', 'black')
        }
    }

    useEffect(() => {
        getTime()

        setInterval(() => {
            getTime()
        }, 1000);
    })

    return (
        <section className="clock_container">
            <div className="clock_details">
                <p className="clock_time">{time}</p>
                <p className="clock_date">{dateNow}</p>
            </div>
            <button onClick={() => handleTheme()} className="clock_mode">{theme ? <i className="fas fa-adjust mode_logo"></i> : <i className="fas fa-adjust rotate mode_logo"></i>}</button>
        </section>
    )
}

export default Clock