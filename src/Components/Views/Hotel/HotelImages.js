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

    renderThumbnailItems(obj){
        let thumbArray = [];
            let style = {
                backgroundImage:`url(${obj.url})`
            };
            thumbArray.push(
                <div key={obj.alt} className="hotel-image-item" title={obj.alt} style={style}>
                </div>
            );


        return thumbArray;
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
                images[i].default === true ?
                <div className="hotel-image-block" style={style}></div>:''
            )
        }

        return imageArray;
    }

    renderThumbView(){
        let images = this.state.data;
        let i;
        let imageArray = [];
        for(i in images){
            imageArray.push(
                images[i].default !== true ?
                this.renderThumbnailItems(images[i])
                :''

            )
        }

        return imageArray;
    }

    render(){
        return(
            <div className="hotel-image-view">
                {this.renderImageView()}
                <div className="hotel-image-thumbs">
                {this.renderThumbView()}
                </div>
            </div>
        )
    }
}

export default HotelImages;