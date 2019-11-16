import React from 'react'
export interface MenuProps {
    url: string,
    title: string,
}
const Menu: React.FC<MenuProps> = (props) => {

    return (
    <div>{props.title}</div>
    )
}
export default Menu