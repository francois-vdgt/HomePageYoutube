import '../btn-humburger/burgerBtn.scss'
export default function BurgerBtn({burgerClick, isOpen}){
    return(
        <>
            {isOpen ?
                <span className="material-symbols-outlined btn-burger" onClick={burgerClick}>close</span>
            :
                <span className="material-symbols-outlined btn-burger" onClick={burgerClick}>menu</span> 
            }
        </>
    )
}