import { useState } from "react"
import "./widgetBar.scss"
import { useRef } from "react"

export default function WidgetBar({menuOpen}){

    const listRef = useRef()
    const tableWidgets = [
        "Tous",
        "Musique",
        "Jeux Vidéo",
        "Critique cinématographique", 
        "Programation informatique",
        "Bande annonce",
        "Musique",
        "Jeux Vidéo",
        "Critique cinématographique", ,
        "Musique",
        "Jeux Vidéo",
        "Critique cinématographique", ,
        "Musique",
        "Jeux Vidéo",
        "Critique cinématographique",
    ]

    return(
        <div className={`cont-WidgetBar ${!menuOpen && "closeSizeWidget"}`}> 
            <ul className="widgetList" ref={listRef}>
                {tableWidgets.map((widget, index) => 
                    <li key={index}>{widget}</li>
                )}
            </ul>
        </div>
    )
}