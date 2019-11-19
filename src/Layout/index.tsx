import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import './index.scss'
import Menu, { MenuProps } from '../Components/Menu'
import Active from 'Pages/Active'


// 也可以使用interface
type LayoutProps = {
  menus: Array<MenuProps>,
  children?: any,
}

const LayoutLeft: React.FC = (props: any) => {
  return (<div className={`layout-left`}>

  </div>)
}
const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

  const store = useSelector(state => state);
  const [clospe, setClospe] = useState("clospe"); // 是否收起侧边栏
  // const history = useHistory()
  console.log("中心store", store)
  // console.log("history", history)


    return (
      <div className={"layout-container"}>
        <div className={`layout-left ${clospe}`}>
          <div className={`ra-mark`}>RcAria</div>
          
            {props.menus.map((menu, index) => {
              return <Link to={menu.url}><Menu {...menu} /></Link>
              
            })}
          <div
            className={`button-toggle ${clospe}`}
            onClick={() =>{
              if(clospe === `clospe`){
                setClospe(`noclose`)
              }else{
                setClospe(`clospe`)
              }           
            }}
          >切换侧边栏</div>
        </div>
        <div className={"layout-content"}>
            <Switch>
              <Route path="/active" exact>
                <Active />
              </Route>
              <Route path={"/start"}>
              </Route>
              <Route path={"/start"}>
              </Route>
              <Route path={"/start"}>
              </Route>
            </Switch>
          {props.children}   
        </div>
      </div>
    )
}
export default Layout