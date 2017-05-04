/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';

class HotelPricingBeds extends Component{
    render(){
        let pricingBedsArray = [];
        for(let p in this.props.data){
            pricingBedsArray.push(
                <div key={p} className="room-pricing-bed">
                    <div className="room-pricing-bed-type">{this.props.data[p].count} {this.props.data[p].bedType} beds</div>
                </div>
            )
        }
        return(
            pricingBedsArray.length > 0 ? <div className="room-card">{pricingBedsArray}</div> : null
        )
    }
}

export default HotelPricingBeds;