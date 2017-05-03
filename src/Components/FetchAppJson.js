/**
 * Created by David Maser on 03/05/2017.
 */
import React,{Component} from 'react';
import Request from 'react-http-request';
import Loading from "./UI/Loading";
import Countries from "./Countries";


class FetchData extends Component{
    constructor(props){
        super(props);
        this.state={
            url:this.props.url,
            method:this.props.method,
            target:this.props.target
        }
    }
    render(){
        return(
            <Request
                url={this.props.url}
                method={this.props.method}
                accept='application/json'
                verbose={false}
                timeout={5000}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <Loading background="rgba(0, 0, 0, 0.85)" color="#fff" show={true} error={false} />
                        }else if (error) {
                            return <Loading background="rgba(0, 0, 0, 0.85)" color="#fff" show={true} error={true} />
                        } else {
                            let data = result.body.GlobeTrotter[this.state.target];
                            return (
                                <section id="list-view">
                                <Countries data={data}/>
                                </section>
                            );
                        }
                    }
                }
            </Request>
        )
    }
}

export default FetchData;