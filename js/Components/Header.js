import React from 'react'
import NavBar from './NavBar.js'

class Main extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="header">
                    <div className="header_title">
                        <div className="header_title__main">
                            <span>City</span>
                            <span className='offset_title'>Living.</span>
                            <span>Refined</span>
                        </div>
                        <button className='header_title_btn'>Contact Us</button>
                    </div>
                    <div className="header_slider">
                        <img src="../img/2.jpg" alt="pic" className="header_slider__pic"/>
                    </div>
                </div>
            </div>
        )
    }
};
export default Main;