/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';

class HotelCard extends Component{
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
                <h2>{view.name}</h2>
                <p>{view.description}</p>
            </div>
        )
    }
}

export default HotelCard;