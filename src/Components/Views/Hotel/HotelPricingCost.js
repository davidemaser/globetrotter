/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';

class HotelPricingCost extends Component{
    render(){
        let pricingCostArray = [];
        for(let p in this.props.data){
            pricingCostArray.push(
                <div key={p} className="room-pricing-cost">
                    {this.props.data[p].dateStart !== '' ?<div className="room-pricing-bed-cost-span">{`Valid between `+this.props.data[p].dateStart+` and `+this.props.data[p].dateEnd}</div> : ''}
                    {this.props.data[p].price !== '' ? <div className="room-pricing-bed-cost-price">Price ${this.props.data[p].price}</div> : '' }
                    {this.props.data[p].minStay !== '' ? <div className="room-pricing-bed-cost-min">{`Minimum Stay `+this.props.data[p].minStay+` nights`}</div> : '' }
                </div>
            )
        }
        return(
            pricingCostArray.length > 0 ? <div className="room-pricing-card">{pricingCostArray}</div> : null
        )
    }
}

export default HotelPricingCost;