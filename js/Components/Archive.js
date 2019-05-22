import React from 'react'

class Archive extends React.Component{
    render(){
        return(
            <div className="archive">
                <div className="archive_title">
                    <h1>Nasze realizacje</h1>   
                    <h2>Oferty archiwalne</h2>
                </div>
                <div className="archive_gallery">
                    <div className="archive_gallery_box">
                        <div className="archive_gallery_info">
                            <span>Broniewskiego 33</span>
                        </div>
                    </div>
                    <div className="archive_gallery_box">
                        <div className="archive_gallery_info">
                            <span>Broniewskiego 33</span>
                        </div>
                    </div>
                    <div className="archive_gallery_box">
                        <div className="archive_gallery_info">
                            <span>Broniewskiego 33</span>
                        </div>
                    </div>
                    
                </div>               
            </div>
        )
    }
};
export default Archive;