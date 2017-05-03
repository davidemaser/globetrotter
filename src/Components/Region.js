/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import Cities from "./Cities";

class Region extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    buildRegionLayout(){
        let region = this.state.data;
        let r;
        let regionArray = [];
        for(r in region){
            let objKey = Object.keys(region[r]);
            let objCities = region[r][objKey].cities;
            let objDescription = region[r][objKey].description;
            console.log(region[r],objKey,region[r][objKey]);
            regionArray.push(
                <div key={r} className="region-view">
                    <h3 className="region-name">{objKey}</h3>
                    <p className="region-description">{objDescription}</p>
                    <Cities data={objCities}/>
                </div>
            )
        }
        return regionArray;
    }

    render(){
        return(
            <div className="region-block">
                {this.buildRegionLayout()}
            </div>
        )
    }
}

export default Region;