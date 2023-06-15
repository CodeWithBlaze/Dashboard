import React from 'react';
import MenuItem from './MenuItem';

function SideMenu({menuItems=[]}) {
    return (
        <>
        {
            menuItems.map((menu,index)=>
            <MenuItem
            key={index}
            imgStyle={'menuitems-icon'}
            textStyle={'menuitems-text'}
            value={menu.value}
            img={menu.img}
            text={menu.text}
            />)
        }
        </>
    );
}

export default SideMenu;