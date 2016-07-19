import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTrucks} from '../actions/index';

import { default as update } from "react-addons-update";

class FoodTrucks extends Component {

  componentWillMount() {
    // add mocks logic here
     var lat = this.props.params.lat;
     var long = this.props.params.long;


   this.props.fetchTrucks(lat, long);
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
