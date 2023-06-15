import React from 'react';
import '../css/iconset.css';



function Photoset({users,addMoreButton,size}) {
    
    return (
        <div className='photoset-container'>
                      {
                        users.map((user,index)=><div style={{position:'relative',right:(index * 10)}}>{user}</div>)
                      }
                    {
                        addMoreButton && <img src='/images/add_button.svg' style={{marginLeft:10,width:size,height:size ,position:'relative',right:((users.length - 1)*10 )}}/>
                    }
                      
        </div>
    );
}

export default Photoset;