import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLatLong} from '../actions/index';

 class FoodTrucks extends Component {

   componentWillMount() {
      this.props.getLatLong(this.props.params.address);

   }

  renderLists(){

    return(
        this.props.trucks.map(function(element){
            return (
               <li key={element.address} className="list-group-item li-dim">{element.address}</li>
               )
       })
    )
  }

  render(){
    console.log('props again'+ JSON.stringify(this.props.location));
    return(
      <ul className = "list-group col-sm-4">
        {this.renderLists()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  console.log('State:' , state)
  return {trucks: state.trucks, location: state.location}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getLatLong}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodTrucks);
