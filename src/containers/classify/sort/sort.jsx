import React from 'react';
import './sort.css'
import axios from 'axios'

export default class Sort extends React.Component {

     constructor(props){
                 super(props);
                 this.state = {
                    catelist:[],
                     sortlist:[],
                     items:[],
                     index:0,
         };
         this.handleClick = this.handleClick.bind(this);
     }

    handleClick(index){
        this.setState({index})
        let sortlist = this.state.catelist[index].cate_list;
        this.setState({sortlist});
        this.refs.demo.style.display='none'
    };

    componentDidMount(){
        axios.get('/classify')
            .then(res => {
                const catelist = res.data.data.categorys;
                const items = res.data.data.categorys[0].cate_list;
                this.setState({catelist});
                this.setState({items});
                console.log(catelist);
                console.log([...catelist])

            });
    }

    render(){
        let catelist = this.state.catelist;
        let sortlist = this.state.sortlist;
        let items = this.state.items;
        let index1=this.state.index;

        if(!catelist){
            catelist=[]
        }

        // style={isshow?{background: "#f3f4f5",color:"#ed4044"}:{}}

      return(
      <div>
          <div className="classify_content">
              <div className="content_left">
                  <div>
                      <ul>
                          {
                              catelist.map((cate,index)=>{
                                  return  <li onClick={()=>this.handleClick(index)} className="leftlist" key={index}
                                 className={index1===index?'redon':''}            >{cate.name}</li>
                              })
                          }
                      </ul>
              </div>
          </div>
              {
                  sortlist.map((list,index)=>{
                        return  <div className="content_right" key={index}>
                            <div>
                                <div className="sort">
                                    <div className="sort_content">
                                        <p>
                                            <span className='sortlist_title'>{list.title}</span>
                                            <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="" />
                                        </p>
                                        <ul className="sort_list">
                                            {
                                                list.list.map((item,index)=>{
                                                    return  <li key={index}>
                                                        <a >
                                                            <div className="list_li" >
                                                                <img src={item.photo || item.logo} alt="" />
                                                            </div>
                                                            <p>{item.name}</p>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
              }

        {/*初始化*/}
        <div ref="demo">
            {
                items.map((item,index)=>{
                    return <div className="content_right" key={index}>
                        <div>
                            <div className="sort">
                                <div className="sort_content">
                                    <p>
                                        <span>{item.title}</span>
                                        <img src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt=""/>
                                    </p>
                                    <ul className="sort_list">
                                        {
                                            item.list.map((ite,index)=>{
                                               return  <li key={index}>
                                                    <a >
                                                        <div className="list_li" >
                                                            <img src={ite.photo} alt="" />
                                                        </div>
                                                        <p>{ite.name}</p>
                                                    </a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        
    </div>
          
  </div>
      )
    }
 }