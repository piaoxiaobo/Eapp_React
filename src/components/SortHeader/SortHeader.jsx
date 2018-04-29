import React from 'react';
import '../FootGuide/footGuide.css'
import {NavLink,Switch,Redirect,Route}  from 'react-router-dom'
export default class SortHeader extends React.Component {
    render(){
      return(
          <div>
              <div className="wrap">
                  <div className="header">
                      <div className="header_classify">
                          <NavLink to='sort'><span>分类</span></NavLink>
                      </div>
                      <div className="header_brand">
                          <NavLink to='brand'><span>品牌</span></NavLink>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
 }