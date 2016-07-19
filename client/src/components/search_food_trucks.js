import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, dispatch} from 'redux';
import {getLatLong, setLatLongReceived, fetchMockedLatLong, getWelcomeMessage} from '../actions/index';

class SearchFoodTrucks extends Component {

  constructor(props){
    super(props);
    this.state={welcome_msg : '', location:''};
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
   const welcome_message = this.props.getWelcomeMessage();
   welcome_message.then(function(result){
     this.setState({welcome_msg: result.payload.data.message});
   }.bind(this));


  }


  onInputChange(event){
    this.setState({location: event.target.value});
  }

  onSubmitForm(event){
    event.preventDefault();
    const  latLongPromise = this.props.getLatLong(this.state.location);
   //const  latLongPromise = this.props.fetchMockedLatLong(this.state.location);

    latLongPromise.then(function(result){
        //dispatch(setLatLongReceived);
        this.context.router.push('/foodTrucks/location_address/'+result.payload.data.Latitude+"/" + result.payload.data.Longitude);
    }.bind(this))
    //router push to foodTrucks


  }
  render(){
    return(
      <div>
      {this.state.welcome_msg}
      <form onSubmit = {this.onSubmitForm.bind(this)} className="search_bar">
        <input value={this.state.location} onChange={this.onInputChange.bind(this)} type="text" className="form-control" placeholder="Search for street..."></input>
        <button className="submit btn btn-primary" action="submit">Search</button>
      </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({getLatLong, setLatLongReceived, fetchMockedLatLong, getWelcomeMessage}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchFoodTrucks)
