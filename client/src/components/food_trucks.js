import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTrucks} from '../actions/index';
import GoogleMaps from './google_map';
import GoogleMapsTest from './google_map_test';

 class FoodTrucks extends Component {

  componentWillMount(){
  // this.props.fetchTrucks(this.props.params.address);
  }

  renderLists(apiResponse){


    return(
        apiResponse.map(function(element){

            if(element.Longitude === ""){
              element.Longitude = -122.395811053023;
            }
            if(element.Latitude === ""){
              element.Latitude = 37.7943310032468;
            }
            console.log("element.Longitude: "+ element.longitude);
            console.log("element.Latitude: "+ element.latitude);
            return (
               <li key={element._id} className="list-group-item li-dim">{element.address}</li>
               )
       })
    )
  }

  render(){
    console.log(this.props.trucks);
    //const apiResponse = this.props.trucks;
    const apiResponse =
      [
        {
        "address": "368 FELL ST",
        "latitude": "37.7760487080922",
        "longitude": "-122.423939211172",
      },
      {
        "address": "716 TEHAMA ST",
        "latitude": "37.7756237711242",
        "longitude": "-122.411781357745",
      }
    ];

    return(
      <div>

      {this.renderLists(apiResponse)}

      </div>
    )
  }
}
function mapStateToProps(state){
  return {trucks : state.trucks.all}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTrucks}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodTrucks);
