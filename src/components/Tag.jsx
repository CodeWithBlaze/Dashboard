import React from 'react';
import '../css/tag.css';

function Tag({bgColor="red",color="white",borderColor="white",title}) {
    return (
        <div className='tag-container' style={{backgroundColor:bgColor,border:borderColor?`1px solid ${borderColor}`:'none'}}>
            <p style={{color}}>{title}</p>
        </div>
    );
}

export default Tag;