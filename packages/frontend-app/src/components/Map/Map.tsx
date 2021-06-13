import React from "react";
import mapboxgl from "mapbox-gl";
import "./map.scss";

mapboxgl.accessToken =
    "pk.eyJ1Ijoicy1hLW4tIiwiYSI6ImNrOW1nYjczdDAwNDYzZnExNnQ5dm82czEifQ.esEYb5WXIpU-YAXEoA3usw";

export default class Map extends React.Component<any, any> {
    private mapContainer: any;
    constructor(props: any) {
        super(props);
        this.state = {
            lng: 75,
            lat: 12.9,
            zoom: 6.5,
            geoData: {},
            userLocation: "",
        };
        // this.mapContainer = React.createRef();
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: "mapbox://styles/s-a-n-/ck9mgl30r3ieg1irzkqrizs96",
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
        });
        map.on("move", () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            });
        });
    }

    render() {
        return (
            <div>
                <div className="sidebarStyle">
                    <div>
                        Longitude: {this.state.lng} | Latitude: {this.state.lat}{" "}
                        {/*| Zoom: {this.state.zoom}*/}
                    </div>
                </div>
                <div className="map">
                    <div
                        ref={(el) => (this.mapContainer = el)}
                        className="mapContainer"
                    />
                </div>
            </div>
        );
    }
}
