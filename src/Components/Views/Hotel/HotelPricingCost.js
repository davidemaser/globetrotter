/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';

class HotelPricingCost extends Component{
    constructor(props){
        super(props);
        this.state={
            addClass:'hidden'
        };

        this.modBlockVisibility = this.modBlockVisibility.bind(this);
    }

    modBlockVisibility(){
        this.state.addClass === 'hidden' ? this.setState({addClass:'visible'}) : this.setState({addClass:'hidden'});
    }

    render(){
        let pricingCostArray = [];
        for(let p in this.props.data){
            pricingCostArray.push(
                <div key={p} className="room-pricing-cost">
                    {this.props.data[p].dateStart !== '' ?<h5 className="room-pricing-bed-cost-span" onClick={this.modBlockVisibility}>{`Valid between `+this.props.data[p].dateStart+` and `+this.props.data[p].dateEnd}</h5> : ''}
                    {this.props.data[p].price !== '' ? <div className={`room-pricing-bed-cost-price `+this.state.addClass}>Price ${this.props.data[p].price}</div> : '' }
                    {this.props.data[p].minStay !== '' ? <div className={`room-pricing-bed-cost-min `+this.state.addClass}>{`Minimum Stay `+this.props.data[p].minStay+` nights`}</div> : '' }
                </div>
            )
        }
        return(
            pricingCostArray.length > 0 ? <div className="room-pricing-card">{pricingCostArray}</div> : null
        )
    }
}

export default HotelPricingCost;