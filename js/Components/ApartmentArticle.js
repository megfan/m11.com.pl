import React, { Component } from 'react'

class ApartmentArticle extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const info = this.props.article;
      const gallery = this.props.gallery;     
    return (
    <div className="detail_article">
        <div className="detail_article_text">
            <div className="detail_article_text_head">
                <h2>Wyjątkowe miejsce</h2>
                <h1>{info.title}</h1>  
            </div>
            <div className="detail_article_text_para">
                <div>{info.text_02}</div>
                <div>{info.text_03}</div>
            </div>
            <div className="detail_article_text_para">
                <div>{info.text_04}</div>
                <div>{info.text_05}</div>
            </div>
        </div>
 
      </div>
    )
  }
};

export default ApartmentArticle;
