import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import FoodTrucks from './containers/food_trucks';
import SearchFoodTrucks from './components/search_food_trucks';

export default(
  <Route path="/" component={App} >
      <IndexRoute component={SearchFoodTrucks}/>
      <Route path="/foodTrucks/location_address/:lat/:long" component={FoodTrucks} />
                  
  </Route>
)
