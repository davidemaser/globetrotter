/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import HotelImages from "./HotelImages";
import HotelServices from "./HotelServices";
import HotelAmenities from "./HotelAmenities";
import HotelPricing from "./HotelPricing";

class HotelCard extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    render(){
        let view = this.state.data;
        let pricing = this.state.data.pricing;
        let amenities = this.state.data.amenities;
        let services = this.state.data.services;
        console.log(view);
        return(
            <div className="hotel-card">

                <div className="hotel-card-left">
                    <HotelImages data={view.images} />
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
                    <div className="hotel-card-services"><HotelServices data={services}/></div>
                    <div className="hotel-card-amenities"><HotelAmenities data={amenities} /></div>
                    <div className="hotel-card-pricing"><HotelPricing data={pricing} /></div>
                </div>
            </div>
        )
    }
}

export default HotelCard;