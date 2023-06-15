import React from 'react';
import '../css/value.css';

function Value({containerStyle="",textStyle="",value,color,backgroundColor}) {
    return (
        <div className={`value-container ${containerStyle}`} style={{borderRadius:(parseInt(value)<10)?'50%':'99999px',backgroundColor:backgroundColor}}>
                <p className={`value-container-text ${textStyle}`} style={{color:color}}>{value}</p>
        </div>
    );
}

export default Value;