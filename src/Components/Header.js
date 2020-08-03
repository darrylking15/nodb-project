import React from "react"; 
import hands from "./hands.png"


const Header = () =>{
    return(
        <header className="react-header">
            <img alt="logo"src={hands}/>
            <h1 className="header-title">My Daily Bible Journal App</h1>
            
        </header>
    )
}


export default Header