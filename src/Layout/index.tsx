import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import './index.scss'
import Menu, { MenuProps } from '../Components/Menu'
// 也可以使用interface
type LayoutProps = {
  menus: Array<MenuProps>,
  children?: any,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

  const store = useSelector(state => state);
  // const history = useHistory()
  console.log("中心store", store)
  // console.log("history", history)


    return (
      <div className={"layout-container"}>
        <div className={"layout-left"}>
          <Router>
            {props.menus.map((menu, index) => {
              return <Link to={menu.url}><Menu {...menu} /></Link>
              
            })}
          </Router>
        </div>
        <div className={"layout-content"}>
          <Router>
            <Switch>
              <Route path={"/start"}>
              </Route>
              <Route path={"/start"}>
              </Route>
              <Route path={"/start"}>
              </Route>
              <Route path={"/start"}>
              </Route>
            </Switch>
          </Router>
          {props.children}   
        </div>
      </div>

    )
}
export default Layout