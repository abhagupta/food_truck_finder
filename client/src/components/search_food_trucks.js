import React, {Component, PropTypes} from 'react';

export default  class SearchFoodTrucks extends Component {

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
    //router push to foodTrucks
    this.context.router.push('/foodTrucks/location_address/'+this.state.location);
    this.setState({location:''});
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
