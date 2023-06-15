import React from 'react';
import '../css/menuitem.css';
import Value from './Value';

function MenuItem({imgStyle,textStyle,value,text,img}) {
    return (
        <div className='menu-item-container'>
            <div className='menu-item-logo-text'>
                <img src={img} className={imgStyle}/>
                <p className={textStyle}>{text}</p>
            </div>
            {value && <Value value={value} 
            containerStyle='menuitem-value-container'
            textStyle='menuitem-value-text'
            />}
        </div>
    );
}

export default MenuItem;