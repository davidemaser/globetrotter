/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';

class ListCountries extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            value:'Canada'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    getCountryList(){
        let list = this.state.data;
        let l;
        let listArray = [];
        for(l in list){
            listArray.push(<option value={list[l].country} key={l}>{list[l].country}</option>)
        }

        return listArray.sort();
    }

    render(){
        return(
            <select className={this.state.value} onChange={this.handleChange}>
                {this.getCountryList()}
            </select>
        )
    }
}

export default ListCountries;