import "./LinkNav.scss"

export default function LinkNav({icon, text, open}){
   return(
    <a className={`link-nav-menu ${open ? "" : "close"}`}>
        {icon}
        <span>{text}</span>
    </a>
   ) 
    

}