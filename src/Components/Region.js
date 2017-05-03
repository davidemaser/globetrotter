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
        let region =this.state.data;
        let regionKeys =  Object.keys(region);
        let r;
        let regionArray = [];
        for(r in regionKeys){
            let objRoot = region[regionKeys[r]];
            let objCities = region[regionKeys[r]].cities;
            regionArray.push(
                <div key={r} className="region-view">
                    <h3 className="region-name">{regionKeys[r]}</h3>
                    <p className="region-description">{objRoot.description}</p>
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