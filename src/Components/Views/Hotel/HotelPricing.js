/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';
import HotelPricingBeds from "./HotelPricingBeds";
import HotelPricingCost from "./HotelPricingCost";

class HotelPricing extends Component{
    render(){
        let pricingArray = [];
        for(let p in this.props.data){
            pricingArray.push(
                <div key={p} className="room-pricing">
                    {this.props.data[p].roomType !== '' ? <div className="room-pricing-type"><span>Room Type</span>{this.props.data[p].roomType}</div> : ''}
                    {this.props.data[p].occupancy !== '' ? <div className="room-pricing-occupancy"><span>Occupancy</span>{this.props.data[p].occupancy}</div> : '' }
                    {this.props.data[p].bed !== '' && this.props.data[p].bed.length > 0 ? <div className="room-pricing-beds"><HotelPricingBeds data={this.props.data[p].bed}/></div> : '' }
                    {this.props.data[p].cost !== undefined ? <div className="room-pricing-cost"><HotelPricingCost data={this.props.data[p].cost} /></div> : '' }
                </div>
            )
        }
        return(
            pricingArray.length > 0 ? <div className="room-card">{pricingArray}</div> : null
        )
    }
}

export default HotelPricing;