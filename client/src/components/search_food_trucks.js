import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLatLong} from '../actions/index';

class SearchFoodTrucks extends Component {

  constructor(props){
    super(props);
    this.state={location:''};
  }

  static contextTypes = {
    router: PropTypes.object
  }


  onInputChange(event){
    this.setState({location: event.target.value});
  }

  onSubmitForm(event){
    event.preventDefault();
    const latLongPromise = this.props.getLatLong(this.state.location);
    latLongPromise.then(function(result){
        this.context.router.push('/foodTrucks/location_address/'+result.payload.data.Latitude+"/" + result.payload.data.Longitude);
    }.bind(this))
    //router push to foodTrucks


  }
  render(){
    return(
      <form onSubmit = {this.onSubmitForm.bind(this)} className="search_bar">
        <input value={this.state.location} onChange={this.onInputChange.bind(this)} type="text" className="form-control" placeholder="Search for street..."></input>
        <button className="submit btn btn-primary" action="submit">Search</button>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({getLatLong}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchFoodTrucks)
