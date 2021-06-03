import React, { createRef, useState } from 'react'
import '../styles/Web.css'

function Web(props){

    const inputSearch = createRef(null)

    const [idWeb, setIdWeb] = useState(0)

    const [webSearch, setWebSearch] = useState({
        0 : {
            name: "Google",
            url : "https://www.google.be/search?q=",
            logo : <i style={{color: "#4285F4"}} className="fab fa-google"></i>,
            color : "#4285F4"
        },
        1 : {
            name : "Youtube",
            url : "https://www.youtube.com/results?search_query=",
            logo : <i style={{color: "#FF0000"}} className="fab fa-youtube"></i>,
            color : "#FF0000"
        },
        2 : {
            name : "Twitch",
            url : 'https://www.twitch.tv/search?term=',
            logo : <i style={{color: "#9147FF"}} className="fab fa-twitch"></i>,
            color : "#9147FF"
        }
    })


    const sendForm = function(e){
        e.preventDefault();
        if(inputSearch.current.value !== ''){
            window.open(webSearch[idWeb].url + inputSearch.current.value, '_parent')
            inputSearch.current.value = ""
            inputSearch.current.blur()
        }
    }


    const handleWeb = function(){
        if(idWeb === Object.keys(webSearch).length -1){
            setIdWeb(0)
        }
        else{
            if(idWeb >= 0){
                setIdWeb(idWeb +1)
            }
        }
    }

    const searchGoogle = function(){
        if(idWeb === 0){
            
            
        }
    }

    const handleWebScroll = function(e){
        if(e.deltaY === -100){
            if(idWeb === Object.keys(webSearch).length -1){
                setIdWeb(0)
            }
            else{
                if(idWeb >= 0){
                    setIdWeb(idWeb +1)
                }
            }
        }
        // else{
        //     if(idWeb === Object.keys(webSearch).length -1){
        //         setIdWeb(0)
        //     }
        //     if(idWeb === 0){
        //         setIdWeb(Object.keys(webSearch).length -1)
        //     }
        //     else{
        //         if(idWeb >= 0){
        //             setIdWeb(idWeb -1)
        //         }
        //     }
        // }
    }

    return(
        <form onWheel={(e) => handleWebScroll(e)} onSubmit={(e) => sendForm(e)} className="web_search_container">
            <span onClick={() => handleWeb()} className="web_logo">{webSearch[idWeb].logo}</span>
            <input onKeyUp={() => searchGoogle()} autoFocus ref={inputSearch} placeholder={`Recherche ${webSearch[idWeb].name}`} type="text" className="web_input"></input>
            <button className="web_button"><i className="fas fa-search"></i></button>
        </form>
    )
}

export default Web