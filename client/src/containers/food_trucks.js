import React, {Component} from 'react';
import {connect} from 'react-redux';


 class FoodTrucks extends Component {


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
    return(
      <ul className = "list-group col-sm-4">
        {this.renderLists()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  return {trucks : state.trucks}
}




export default connect(mapStateToProps)(FoodTrucks);
