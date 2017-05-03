/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import Region from "./Region";

class Countries extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            view:'country'
        }
    }

    buildCountryLayout(){
        let dataList = this.state.data[this.state.view];
        let d;
        let dataArray = [];
        for(d in dataList){
            let objRegion = dataList[d].region;
            dataArray.push(<div key={d}  className="country-block">
                <h1>{dataList[d].title}</h1>
                <p>{dataList[d].description}</p>
                <Region data={objRegion}/>
            </div>)
        }

        return dataArray;

    }

    render(){
        return(
            <div className="country-view">
                {this.buildCountryLayout()}
            </div>
        )
    }
}

export default Countries;