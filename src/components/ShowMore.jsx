import React from 'react';

function ShowMore({number,size=45}) {
    return (
        <div style={{display:'flex',backgroundColor:'#F2F4F7',justifyContent:'center',alignItems:'center',borderRadius:'50%',width:size,height:size}}>
            <p style={{fontSize:12,fontWeight:'0.75rem',color:'#606C80'}}>+{number}</p>
        </div>
    );
}

export default ShowMore;