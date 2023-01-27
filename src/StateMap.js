import React, {Component} from 'react';
import * as d3 from "d3";
import counties from "./county.json";

class StateMap extends Component {

    componentDidMount() {
        this.drawMap();
    }

    drawMap() {

        let projection = d3.geoEquirectangular();

        let geoGenerator = d3.geoPath()
            .projection(projection);
        
        // Join the FeatureCollection's features array to path elements
        let u = d3.select('#content')
            .selectAll('path')
            .data(counties.features)
            .join('path')
            .attr('d', geoGenerator);
    
    }

    render() {
        return (
            <div id={"content"}>
            </div>
        )
    }

}

export default StateMap;