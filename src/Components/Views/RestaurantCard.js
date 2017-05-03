/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import RestaurantImages from "./RestaurantImages";

class RestaurantCard extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    render(){
        let view = this.state.data;
        return(
            <div className="hotel-card">

                <div className="hotel-card-left">
                    <RestaurantImages data={view.images} />
                </div>
                <div className="hotel-card-right">
                    <div className="hotel-card-header">
                        <h2>{view.name}</h2>
                    </div>
                    <p>{view.description}</p>
                </div>
                <div className="hotel-card-footer">
                    <div className="hotel-card-details">
                        <div className="detail-view-block">{view.address}</div>
                        <div className="detail-view-block">{view.postCode}</div>
                        <div className="detail-view-block">{view.telephone}</div>
                    </div>
                    <div className="hotel-card-services">&nbsp;</div>
                    <div className="hotel-card-amenities">&nbsp;</div>
                    <div className="hotel-card-pricing">&nbsp;</div>
                </div>
            </div>
        )
    }
}

export default RestaurantCard;