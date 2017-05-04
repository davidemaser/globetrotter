/**
 * Created by David Maser on 04/05/2017.
 */
import React,{Component} from 'react';
import ReactDom from 'react-dom';

class MapDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            apiKey:this.props.api,
            origin:{
                lng:'',
                lat:''
            },
            destination:{
                lng:this.props.long,
                lat:this.props.lat
            }
        }
    }

    componentDidMount(){
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    origin: {
                        lng: coords.longitude,
                        lat: coords.latitude
                    }
                })
            })
        }
        window.renderMap = this.renderMap;
    }

    renderMap(){
        const maps = google.maps;
        const mapRef = this.refs.map;
        const domNode = ReactDom.findDOMNode(mapRef);
        let zoom = 10;
        const center = new maps.LatLng(this.state.destination.lat, this.state.destination.lng);
        const mapConfig = Object.assign({}, {
            center: center,
            zoom: zoom
        });
        this.map = new maps.Map(domNode, mapConfig);
    }

    render(){
        return (
            <div ref="map">Loading...</div>
        )
    }
}

export default MapDisplay;