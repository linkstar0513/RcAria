import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import Menu, { MenuProps } from '../Components/Menu'
// 也可以使用interface
type LayoutProps = {
  menus: Array<MenuProps>,
  children?: any,
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {

  const store = useSelector(state => state);
  console.log("中心store", store)

    return (
      <div className={"layout-container"}>
        <div className={"layout-left"}>
          {props.menus.map((menu, index) => {
            return <Menu {...menu} />
          })}
        </div>
        <div className={"layout-content"}>
          {props.children}   
        </div>
      </div>

    )
}
export default Layout