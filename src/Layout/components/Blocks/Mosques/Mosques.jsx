import React from "react";
import GoogleMapReact from "google-map-react";


// style
import "./Mosques.scss";

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default function Mosques() {
    const defaultProps = {
        center: {lat: 10.99835602, lng: 77.01502627}, zoom: 11
    };

    return <div id="mosques" style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact bootstrapURLKeys={{key: ""}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
            <AnyReactComponent lat={59.955413} lng={30.337844} text={"My Marker"}/>
        </GoogleMapReact>
    </div>
}
