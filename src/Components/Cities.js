/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import Hotels from "./Hotels";

class Cities extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    buildCityLayout(){
        let cities = this.state.data;
        let c;
        let cityArray = [];
        for(c in cities){
            cityArray.push(
                <div key={c} className="city-view">
                    <div className="city-name">{cities[c].name}</div>
                    <div className="city-description">{cities[c].description}</div>
                    <Hotels data={cities[c].hotels}/>
                </div>
            )
        }

        return cityArray;
    }

    render(){
        return(
           <div className="city-block">
               {this.buildCityLayout()}
           </div>
        )
    }
}

export default Cities;