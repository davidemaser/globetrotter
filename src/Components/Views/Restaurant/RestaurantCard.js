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
            <div className="restaurant-card">
                <div className="hotel-card-scrollable">
                    <div className="restaurant-card-header">
                        <h2>{view.name}</h2>
                    </div>
                    <p>{view.description}</p>
                <div className="restaurant-card-footer">
                    <div className="restaurant-card-details">
                        <div className="detail-view-block">{view.address}</div>
                        <div className="detail-view-block">{view.postCode}</div>
                        <div className="detail-view-block">{view.telephone}</div>
                    </div>
                    <div className="restaurant-card-services">&nbsp;</div>
                    <div className="restaurant-card-amenities">&nbsp;</div>
                    <div className="restaurant-card-pricing">&nbsp;</div>
                </div>
                </div>
                <RestaurantImages data={view.images} />
            </div>
        )
    }
}

export default RestaurantCard;