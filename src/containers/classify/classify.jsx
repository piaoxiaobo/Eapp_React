import React from 'react';
import {NavLink,Switch,Redirect,Route}  from 'react-router-dom'
import Brand from "./brand/brand";
import Sort from "./sort/sort";
// import SortHeader from '../../components/SortHeader/SortHeader'

import './reset.css'
import './classify.css'



export default class Classify extends React.Component {
     constructor(props){
                 super(props);
                 this.state = {
                     showState:true
         };

         this.goclassify = this.goclassify.bind(this);
         this.gobrand = this.gobrand.bind(this);
     }

    goclassify(){
         this.state.showState=true;
    }

    gobrand(){
        this.state.showState=false;
    }


    // style={showState?{color:"#ed4044",borderBottom:'2px solid #ed4044'}:{}}

    render(){
         let showState =this.state.showState;
         console.log(showState);
      return(
      <div>
          <div>
              <div className="wrap">
                  <div className="header">
                      <div className="header_classify"  >
                          <NavLink to='sort'><span  onClick={this.goclassify}
                             style={showState?{color:"#ed4044",borderBottom:'2px solid #ed4044'}:{}}
                          >分类</span></NavLink>
                      </div>
                      <div className="header_brand">
                          <NavLink to='brand'><span
                           style={showState?{}:{color:"#ed4044",borderBottom:'2px solid #ed4044'}} onClick={this.gobrand} >品牌</span></NavLink>
                      </div>
                  </div>
              </div>
          </div>
          <Switch>
              <Route path='/classify/sort' component={Sort}></Route>
              <Route path='/classify/brand' component={Brand}></Route>
              <Redirect to='/classify/sort' />
          </Switch>
      </div>
      )
    }
 }