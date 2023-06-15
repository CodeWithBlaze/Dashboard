import React from 'react';
import '../css/heading.css';

function Heading({children,logo,text,textStyleClass='',containerStyleClass='',imgStyleClass=''}) {
    return (
        <div className={containerStyleClass}>
            <div className='text-logo-container'>
                <p className={textStyleClass}>{text}</p>
                <img src={logo} className={imgStyleClass}/>
            </div>
            {children && <div style={{marginTop:30}}>
                {children}
            </div>}
        </div>
    );
}

export default Heading;