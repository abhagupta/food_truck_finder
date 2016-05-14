import React, {Component} from 'react';

export default class App extends  Component{
  render(){
    return(
      <div className="app">
         <h4>Welcome to Food Truck Finder!</h4>
         {this.props.children}
      </div>
    )
  }
}
