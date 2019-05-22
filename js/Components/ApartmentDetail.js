import React, { Component } from 'react'
import NavBar from './NavBar.js';
import ApartmentArticle from './ApartmentArticle.js'
import SwiftSlider from 'react-swift-slider';

 class ApartmentDetail extends Component {
    constructor(props){
        super(props);
    }
        render() {
            const { place } =this.props.history.location.state;
            return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="detail">
                        <div className="detail_header">
                            <div className="detail_header_title">
                                <span>{place.name}</span>
                                <ul className="detail_header_list">{place.article.text_01 && place.article.text_01.map((x)=>{
                                return(
                                    <li key={x}>{x}</li>
                                )                           
                                })}</ul>
                                <button className='detail_header_btn'>Contact Us</button>
                            </div>
                            <div className="detail_header_slider">
                                <SwiftSlider data = {place.gallery} dotColor = "#dee3eb"activeDotColor='#9bc2ff' />
                                {/* <img src={name.pic} alt="x"/> */}
                            </div>
                        </div>
                        <ApartmentArticle article={place.article} gallery={place.gallery}/>
                        <div className="detail_geo">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16734.74255653448!2d21.040100783308908!3d52.208917916761784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd3ce392e8a7%3A0xd09c3475134192!2sJurija+Gagarina+9%2C+Warszawa!5e0!3m2!1spl!2spl!4v1511274872925" ></iframe>
                        </div>
                        <div className="detail_footer">
                            <h1>m11.com.pl</h1>
                            <div className="detail_footer_contact">
                                <h2>+48 502 508 350</h2>
                                <h2>biuro@m11.com.pl</h2>
                            </div>
                            
                            <h3>Ul. Wiejska 12 00-490 Warszawa</h3>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            )
        }
};
export default ApartmentDetail;
