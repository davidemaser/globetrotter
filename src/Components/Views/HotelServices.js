/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';

class HotelServices extends Component{
    render(){
        let servicesArray = [];
        for(let s in this.props.data){
            servicesArray.push(
                <li key={s}>{this.props.data[s]}</li>
            )
        }
        return(
            servicesArray.length > 0 ? <ul className="room-services">{servicesArray}</ul> : null
        )
    }
}

export default HotelServices;