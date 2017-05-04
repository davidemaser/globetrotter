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
            let style = {
                color:'#fff',
                backgroundImage:`url(${images[i].url})`
            };
            imageArray.push(
                <div className="hotel-image-block" style={style}>

                </div>
            )
        }

        return imageArray;
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