import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTrucks} from '../actions/index';

class FoodTrucks extends Component {

  componentWillMount() {
    this.props.fetchTrucks(this.props.params.lat, this.props.params.long);
  }

  renderLists(){
    return(
      this.props.trucks.map(function(element){
        //console.log("element: ", element.adress);
        return (
          <li key={element.address} className="list-group-item li-dim">{element.address}</li>
        )
      })
    )
  }

  render(){


    return(
      <ul className = "list-group col-sm-4">
      {this.renderLists()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  console.log('State:' , state  )
  return {trucks: state.trucks}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTrucks }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodTrucks);
