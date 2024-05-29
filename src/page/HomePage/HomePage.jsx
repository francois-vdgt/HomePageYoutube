import { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import MainNav from "../../component/mainNav/MainNav";
import "./homepage.scss"
import MainContentHP from "../../component/mainContentHomepage/MainContentHP";
import WidgetBar from "../../component/widget-bar/WidgetBar";
import data from "../../data/videoYT.json"

export default function HomePage(){

    const [openMenu, setOpenMenu] = useState(false)
    
    const navClick = () =>{
        setOpenMenu(!openMenu)
    }
    
    const handleResize = () =>{
        if(window.innerWidth <= 626){
            setOpenMenu(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        return () =>{
            window.removeEventListener('resize', handleResize)
        };
    },[])
    
    return(
        <>
            <header>
                <Header burgerClickFunc={navClick} isOpen={openMenu}/>
            </header>
            <main>
                <nav className={`main-nav ${openMenu ? "open" : ""} ` }>
                    <MainNav isOpen={openMenu}/>
                </nav>
                <div className={openMenu ? "main-content-open": "main-content"}>
                    <WidgetBar menuOpen={openMenu}/>
                    <MainContentHP/>
                </div>
            </main>
        </>
    )
}