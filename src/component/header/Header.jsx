import BurgerBtn from "../btn-humburger/BurgerBtn"
import "C:/Users/fvandergucht/WorkFlow/HomePageYoutube/src/component/header/head.scss"
import BtnLogin from "../btn-login/BtnLogin"
import SearchBar from "../search-bar/SearchBar"
import { useEffect, useState } from "react";

function Header({burgerClickFunc, isOpen}){
  

    return(
        <div className="container-header">
            <div className="cont-menu start">
                <BurgerBtn burgerClick={burgerClickFunc} isOpen={isOpen}/>
                <a href="#"> 
                    <img className="logo-header" src="src\assets\Logo_of_YouTube_(2015-2017).svg.png"/>
                </a>
            </div>
            <div className="cont-menu center">
                <SearchBar/>
                <span class="material-symbols-outlined mic">mic</span>
            </div> 
            <div className="cont-menu end">
                <span class="material-symbols-outlined">more_vert</span>
                <BtnLogin />
            </div>
        </div>
    )
}

export default Header