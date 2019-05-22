import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header.js'
import About from './Components/About.js'
import Archive from './Components/Archive.js'
import Offert from './Components/Offert.js';
import Footer from './Components/Footer'

import * as Scroll from "react-scroll/modules/index";



class App extends React.Component {

    componentDidMount() {
        Scroll.animateScroll.scrollTo(0);
    }
    render(){
        return(
                <div>
                    <NavBar />
                    <Header />
                    <About />
                    <Offert />
                    <Archive />
                    <Footer />
                </div>
        )
    }
};
export default App;

{/* <HashRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/offer" component={Offer} />
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer/>
                </div>
            </HashRouter> */}