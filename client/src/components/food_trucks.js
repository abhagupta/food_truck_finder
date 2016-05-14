import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTrucks} from '../actions/index';
import GoogleMaps from './google_map';
import GoogleMapsTest from './google_map_test';

 class FoodTrucks extends Component {

  componentWillMount(){
   this.props.fetchTrucks(this.props.params.address);
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
            console.log("element.Longitude: "+ element.Longitude);
            console.log("element.Latitude: "+ element.Latitude);
            return (
               <li key={element._id} className="list-group-item li-dim">{element.Address}
                  <div className='google-map'>
                      <GoogleMaps lon={element.Longitude} lat={element.Latitude} />
                  </div>
               </li>
               )
       })
    )
  }

  render(){
    console.log(this.props.trucks);
    const apiResponse = this.props.trucks;
    // const apiResponse =
    //   [
    //     {
    //     "address": "368 FELL ST",
    //     "latitude": "37.7760487080922",
    //     "longitude": "-122.423939211172",
    //   },
    //   {
    //     "address": "716 TEHAMA ST",
    //     "latitude": "37.7756237711242",
    //     "longitude": "-122.411781357745",
    //   }
    // ];

    return(
      <div>
      

        <GoogleMapsTest />
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
