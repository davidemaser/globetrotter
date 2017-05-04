/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';

class HotelAmenities extends Component{
    render(){
        let amenitiesArray = [];
        for(let a in this.props.data){
            amenitiesArray.push(
                <li key={a}>{this.props.data[a]}</li>)
        }
        return(
            amenitiesArray.length > 0 ? <ul className="room-amenities">{amenitiesArray}</ul> : null
        )
    }
}

export default HotelAmenities;