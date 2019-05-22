
import React from 'react'
import * as firebase from 'firebase/app';
import 'firebase/database';
import {Link} from "react-router-dom";
import ApartmentDetail from './ApartmentDetail';
var config = {
    apiKey: "AIzaSyBRsBJpQ6zl6bXIBwQYTG1W98OAVUqzb0k",
    authDomain: "m-11-25231.firebaseapp.com",
    databaseURL: "https://m-11-25231.firebaseio.com",
    projectId: "m-11-25231",
    storageBucket: "m-11-25231.appspot.com",
    messagingSenderId: "549128441085"
};

firebase.initializeApp(config);


class Offert extends React.Component{
    constructor(){
        super();
        this.database = firebase.database().ref().child('locals');
        this.state ={
            apartment: [],
            description: [],
            local: ''
        };
    }
    componentWillMount(){
        this.database.on('value', snap => {
            console.log(snap.val());
            this.setState({
                // apartment: Object.values(snap.val()),
                apartment: snap.val(),
            });
        })
        console.log(this.state.apartment);
    };

    render(){
        
        return(
            <div className="offer">
                <div>
                {Object.values(this.state.apartment).map((item, index) => {
                    return(
                    <div className="offer_content left" key={index}>
                        <div className="offer_content_pic">
                            <div className="offer_content_pic_box">
                                 <div className="offer_content_pic_box_special">Już za <span>{item.special}</span> zł</div>
                                 <img src={item.pic} alt="pic"/>
                            </div>
                            
                        </div>
                        <div className="offer_content_txt">
                            <h2 className="title">{item.name}</h2>
                            <ul className="list">{item.description && item.description.map((x)=>{
                                return(
                                    <li key={x}>{x}</li>
                                )                           
                            })}</ul>
                            <button className="btn-1 ">
                                <Link to={{
                                        pathname: "/{item.id}", 
                                        state: {place: item, description: item.description, article: item.article}
                                    }}>Szczegóły &rsaquo;
                                </Link>
                            </button>
                        </div>
                    </div>
                    )
                })}</div>
            </div>
        )
    }
};

export default Offert;

{/* <Link to={"/{item.id}"} query={{local: 'item.name'}} ></Link> */}