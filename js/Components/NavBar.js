import React from 'react'
import { Link } from 'react-router-dom'

 class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src="../../img/logo3.png" className="navbar_logo" alt="Logo"></img>
                <nav className="navbar_items">
                    <Link to="/" className="navbar_items_a" duration={500}>START</Link>
                    <Link to="/" className="navbar_items_a" duration={500}>OFERTA</Link>
                    <Link to="/" className="navbar_items_a" duration={500}>KONTAKT</Link>
                </nav>
            </div>
        )
    }
};
export default NavBar;