import React from 'react';
import {NavLink} from 'react-router-dom'
import './brand.css'

import axios from 'axios'

export default class Brand extends React.Component {

     constructor(props){
                 super(props);
                 this.state = {
                     brand:[]

     }}

    componentDidMount(){
        axios.get('/brand')
            .then(res => {
                const brand = res.data.data.brand;
                this.setState({brand});
                console.log(brand);

            });
    }

    render(){
        let brand = this.state.brand;
        console.log(brand);
        if(!brand){
             brand=[]
        }
      return(
      <div>
          <div className="brand_wrap">
              {
                  brand.map((item,index)=>{
                      return <div className="brand_content" key={index}>
                          <div className="title">
                              <span>—— {item.title} ——</span>
                          </div>
                          <div className="brand_list" >
                              <ul>
                                  {
                                      item.list.map((brandlist,index)=>{
                                          return   <li className="list_item" key={index}>
                                              <a >
                                                  <div className="item_brand">
                                                      <img src={brandlist.logo} alt="" />
                                                  </div>
                                                  <div>
                                                      <img  src="jian.png" alt="" className="jian" />
                                                  </div>

                                                  <img  className="taGongYi" src="tagongyi.png" alt="" />
                                                  <p className="p1">{brandlist.name} </p>
                                                  <p className="p2"> {brandlist.address}</p>
                                              </a>
                                          </li>
                                      })
                                  }

                              </ul>
                          </div>
                      </div>
                  })
              }
        <div className="brandbox"></div>
        <div className="allbrand">
            <NavLink to="/allbrand">全部</NavLink>
        </div>
    </div>
      </div>
      )
    }
 }