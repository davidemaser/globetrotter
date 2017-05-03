/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import HotelCard from "./Views/HotelCard";

class Hotels extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    getHotelInformation(obj){
        let hotels = obj;
        let h;
        let hotelArray = [];
        for(h in hotels){
            hotelArray.push(
                <div key={h} className="hotel-block">
                    <HotelCard data={hotels[h]}/>
                </div>
            )
        }

        return hotelArray;
    }

    getHotelsByStars(){
        let stars = Object.keys(this.state.data.rating);
        let s;
        let starArray = [];
        for(s in stars){
            starArray.push(
                <div key={s}>
                    <div className="star-rating-header" key={s}>{stars[s]} Stars</div>
                    <div className="hotels-corresponding" data-star-count={stars[s]}>
                        {this.getHotelInformation(this.state.data.rating[stars[s]])}
                        </div>
                </div>
            )
        }

        return starArray;
    }

    render(){

        return(
            <div className="hotels-block">
                {this.getHotelsByStars()}
            </div>
        )
    }
}

export default Hotels;