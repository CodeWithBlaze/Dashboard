import React from 'react';
import '../css/iconboard.css';

function IconBoard({customContainerStyle,img,title,imageStyle}) {
    return (
        <div className={`icon-board-container ${customContainerStyle}`}>
            {img && <img src={img} style={imageStyle} alt='board icon'/>}
            {title && <p>{title}</p>}
        </div>
    );
}

export default IconBoard;