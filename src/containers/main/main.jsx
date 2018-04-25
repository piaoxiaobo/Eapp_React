import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from '../home/home';
import Classify from '../classify/classify';
import Login from '../login/login';
import ShopCart from '../shopcart/shopcart';
import FootGuide from '../../components/FootGuide/FootGuide';

export default class Main extends React.Component {
    render(){
      return(
          <div>
              <Switch>
                  <Route path='/home' component={Home}></Route>
                  <Route path='/shopcart' component={ShopCart}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/classify' component={Classify}></Route>
                  <Redirect to='/home'/>
              </Switch>
              <Route component={FootGuide}></Route>
          </div>
      )
    }
 }