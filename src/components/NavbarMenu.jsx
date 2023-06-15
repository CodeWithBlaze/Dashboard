import React, { useState } from 'react';
import '../css/navbar.css';

function NavbarMenu({menu=[],activeColor,showActiveIndicator=true}) {
    const [active,setActive] = useState(menu[0])
    return (
        <ul className='navbar-menu-items-list'>
            {
                menu.map(item=>
                <li 
                key={item} 
                className={`navbar-active-menu ${(showActiveIndicator && active === item)?'link-active':''}`}
                onClick={()=>setActive(item)}
                style={{
                color:active === item?(activeColor?activeColor:'black'):''
                }}>
                    {item}
                </li>)
            }
        </ul>
    );
}

export default NavbarMenu;