import React from 'react';
import './allbrand.css'
import BScroll from 'better-scroll'

import axios from 'axios'

export default class AllBrand extends React.Component {
     constructor(props){
                 super(props);
                 this.state = {
                 allbrand:[],
                 scrollY:0,
                 tops:[],
         }
     }

    totop(){
        const tops=[];
        let top=0;
        tops.push(top);
        const ul=this.refs.getul.getElementsByClassName('allBrand_list');
        Array.prototype.slice.call(ul).forEach(item=>{
            top+=item.clientHeight;
            tops.push(top)
        });
        this.tops=tops
    }

    selectBrand(index){
         console.log('111');
        const y=-this.tops[index];
        this.toscroll.scrollTo(0,y,300)
    }

    componentDidMount(){
        axios.get('/allbrand')
            .then(res => {
                const allbrand = res.data.data.brand;
                this.setState({allbrand});
                console.log(allbrand);

            });

        this.toscroll=new BScroll('.test', {
            click: true,
            scrollX: true,
        });
        this.toscroll.on('scroll',(pos)=>{
            this.scrollY=Math.abs(pos.y)

        })
        this.toscroll.on('scrollEnd',(pos)=>{
            this.scrollY=Math.abs(pos.y)
        })
        this.totop()
    }

    render(){
        let allbrand = this.state.allbrand;

      return(
        <div>
            <div className="allBrand_nav">
                <div className="allBrand_header">
                    <div className="allBrand_title" >
                        <div>
                            <a ><span className="iconfont icon-return backs"></span></a>
                        <span className="sp1">全部品牌</span>
                        <span className="iconfont icon-fenlei1 sp2"></span>
                </div>
            </div>
        </div>
        <div>
            <div className="allBrand_abc">
                <div className="allBrands">
                    <div className="list_abc">
                        <div className="l_wrap">
                            <div className="l_cell">
                                {
                                    allbrand&&allbrand.map((brandli,index)=>{
                                       return <span className="spabc" key={index} onClick={()=>this.selectBrand(index)}>{brandli.order}</span>
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="test">
            <div ref="getul">
                <div className="allBrand_list" >
                    {
                        allbrand&&allbrand.map((brandlist,index) =>{
                          return  <div key={index}>
                                <h2 className="brand_item">{brandlist.order}</h2>
                                <div>
                                    <a  className="demo">
                                        {
                                            brandlist.list.map((brands,index)=>{
                                                return <div className="brand_wraps" key={index}>
                                                    <div className="brand_img">
                                                        <img src={brands.logo} alt="" />
                                                    </div>
                                                    <div>
                                                        <img  src="./jian.png" alt="" className="jian" />
                                                    </div>

                                                    <img  className="taGongYi" src="./tagongyi.png" alt="" />
                                                    <div className="brand_name">
                                                        <p className="bp1">{brands.name}</p>
                                                        <p className="bp2">{brands.address}</p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </a>
                                </div>
                            </div>
                        })
                    }

        </div>
    </div>
    </div>

    </div>
    </div>
        </div>
      )
    }
 }