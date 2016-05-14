import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers  from '../src/reducers';
import chaiJquery from 'chai-jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');  // this is setting a fake  document object that mimics the document object of browser
global.window = global.document.defaultView;

const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state){
   const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
     </Provider>
   ) // This is JSX hence react is needed. Also,  componentInstance keeps the reference of rendered component. but not yet access to html dom elemen
  return  $(ReactDOM.findDOMNode(componentInstance)); // This gives access to html dom node

}

$.fn.simulate = function(eventName, value){
  if(value){   // is used when we have a textarea or input type of element
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]); // the element returned  by jquery could be an array, hence we pick the first element. For eg. $('div').change(),

}

chaiJquery(chai, chai.util, $);

export {renderComponent, expect};
