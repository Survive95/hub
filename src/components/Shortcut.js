import React from 'react'

function Shortcut(props){

    const openLink = function(e){
        e.preventDefault();
        window.open(props.link, "_blank")
    }

    return(
        <a href={props.link} onClick={(e) => openLink(e)} className="shortcut_item">
            <span style={{color: props.color}} className="shortcut_logo">{props.logo}</span>
            <p className="shortcut_name">{props.name}</p>
        </a>
    )
}

export default Shortcut