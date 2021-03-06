/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import RestaurantCard from "./Views/Restaurant/RestaurantCard";

class Restaurants extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    static getRestaurantInformation(obj){
        let restaurants = obj;
        let h;
        let restaurantArray = [];
        if(obj.length > 0) {
            for (h in restaurants) {
                restaurantArray.push(
                    <div key={h} className="restaurant-card-block">
                        <RestaurantCard data={restaurants[h]}/>
                    </div>
                )
            }
        }

        return restaurantArray;
    }

    getRestaurantsByStars(){
        let stars = Object.keys(this.state.data.rating);
        let s;
        let starArray = [];
        for (s in stars) {
            if(this.state.data.rating[stars[s]].length > 0) {
                starArray.push(
                    <div className="restaurant-view" key={s}>
                        <div className={`star-rating-header ${stars[s]}stars`} key={s}>{stars[s]} Stars</div>
                        <div className="restaurants-corresponding" data-star-count={stars[s]}>
                            {this.state.data.rating[stars[s]].length > 0 ?
                                Restaurants.getRestaurantInformation(this.state.data.rating[stars[s]]) :
                                ''
                            }
                        </div>
                    </div>
                )
            }
        }

        return starArray;
    }

    render(){
        return(
            <div className="restaurant-block">
                {this.getRestaurantsByStars()}
            </div>
        )
    }
}

export default Restaurants;