import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTrucks} from '../actions/index';
import SimpleMap from '../components/google_map_test';

import { default as update } from "react-addons-update";

class FoodTrucks extends Component {
  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  }

  componentDidMount() {
    setTimeout(() => {
      let { markers } = this.state;
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: this.props.params.lat,
              lng: this.props.params.long,
            },
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          },
        ],
      });
      this.setState({ markers });
    }, 2000);
  }

  componentWillMount() {
    this.props.fetchTrucks(this.props.params.lat, this.props.params.long);
  }

  _handle_map_click(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  _handle_marker_rightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }


  renderLists(){
    return(
      this.props.trucks.slice(0,10).map(function(element){
        return (
          <div>
          <li key={element.address} className="list-group-item li-dim">
              {element.address}
          </li>

          </div>
        )
      })

    )
  }



  render(){


    return(
      <div>
          <ul className = "list-group col-sm-4">
            {this.renderLists()}
          </ul>
          <SimpleMap
        markers={this.state.markers}
        onMapClick={this._handle_map_click.bind(this)}
        onMarkerRightclick={this._handle_marker_rightclick.bind(this)}
      />

      </div>
    )
  }
}
function mapStateToProps(state){
  return {trucks: state.trucks}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTrucks }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodTrucks);
