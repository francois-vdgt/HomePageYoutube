import { useRef, useState } from "react"
import "./searchBar.scss"

export default function SearchBar(){

    const [isFocus, setIsFocus] = useState(false) 
    const [write, SetWrite] = useState("")
    const searchInput = useRef(null)
    
    const HandleFocus = () => setIsFocus(!isFocus)
    
    const inputeReset = () => {
        SetWrite("") 
        searchInput.current.focus()
    } 

    const handleChange = (e) =>{
        SetWrite(e.target.value)
        if(e.target.value == ""){
            SetWrite("")
        }else if(write !== ""){
            SetWrite(e.target.value)
        }
    }

    
    return(
        <>
            <div className="search-bar">
                    <div className="cont-input">
                        {isFocus && <span class="material-symbols-outlined searchInInput">search</span>}
                        <input 
                            type="text" 
                            ref={searchInput}
                            placeholder="Rechercher" 
                            onFocus={() => HandleFocus()} 
                            onBlur={() => HandleFocus()} 
                            onChange={handleChange} 
                            value={write}
                        />
                        {write == "" ? "" : <span class="material-symbols-outlined closeInInput" onClick={inputeReset}> close </span>}
                    </div>
                    <div className="cont-search-icon">
                        <span class="material-symbols-outlined" onClick={()=>alert(`Recherche sur params : ${write}`)}>search</span>
                    </div>
            </div>
        </>
    )
}