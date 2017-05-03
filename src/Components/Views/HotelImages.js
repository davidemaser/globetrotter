/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';

class HotelImages extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    renderImageView(){
        let images = this.state.data;
        let i;
        let imageArray = [];
        for(i in images){
            imageArray.push(
                <div className="hotel-image-block">
                    <img src={images[i].url} alt={images[i].alt} />
                </div>
            )
        }
    }

    render(){
        return(
            <div className="hotel-image-view">
                {this.renderImageView()}
            </div>
        )
    }
}

export default HotelImages;