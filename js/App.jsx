import React from 'react';
import ReactDOM from 'react-dom';
import * as Scroll from "react-scroll/modules/index";

    import {
        HashRouter,
        Route,
        Switch,
        Link,
    } from 'react-router-dom'


class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <img src="img/logo3.png" className="navbar_logo" alt="Logo"></img>
                <nav className="navbar_items">
                    <Link to="/" className="navbar_items_a" duration={500}>START</Link>
                    <Link to="/" className="navbar_items_a" duration={500}>OFERTA</Link>
                    <Link to="/" className="navbar_items_a" duration={500}>KONTAKT</Link>
                </nav>
            </div>
        )
    }
}

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
                        </div>
                        <div className="header_slider">
                            <img src="../img/2.jpg" alt="pic" className="header_slider__pic"/>
                        </div>
                    </div>
                    <About />
                    <Offer/>
                    <Archive/>
            </div>
        )
    }
}
class About extends React.Component{
    render(){
        return(
            <div className="about">
                    <div className="about_avers">
                        <h1>9</h1>
                        <p>LAT NA RYNKU</p>
                    </div>
                    <div className="about_avers">
                        <h1>65</h1>
                        <p>Zrealizowanych projektów</p>
                    </div>
                    <div className="about_avers">
                        <h1>65</h1>
                        <p>Zadowolonych klientów</p>
                    </div>
                    <div className="about_avers">
                        <h1>13</h1>
                        <p>Projektów w realizacji</p>
                    </div>
            </div>
        )
    }
}
class Offer extends React.Component{
    render(){
        return(
            <div className="offer">
                <div className="offer_content left">
                    <div className="offer_content_pic">
                         <img src="img/gagarina95.jpg" className="offer_pic" alt="Logo"></img>
                    </div>
                    <div className="offer_content_txt">
                        <h2 className="title">Mieszkanie Gagarina 9</h2>
                        <ul className="list">
                            <li className="item">Doskonała lokalizacja</li>
                            <li className="item">Kameralna kamienica po rewitalizacji</li>
                            <li className="item">Przy Parku Łazienki Królewskie</li>
                            <li className="item">Wysoki standart wykończenia</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
class Archive extends React.Component{
    render(){
        return(
            <div className="offer">
            Archive
            </div>
        )
    }
}
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                Footer
            </div>
        )
    }
}

class NotFound extends React.Component{
    render(){
        return(
            <h1>Upss,  404</h1>
        )
    }
}

export default class App extends React.Component {

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }
    render(){
        return(
            <HashRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/offer" component={Offer} />
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </HashRouter>
             
        )
    }
}

