import React from 'react';
import '../css/userphoto.css';
import Value from './Value';

function UserPhoto({frame,status,value,img,size=45,statusStyle=''}) {
    return (
        <div className='photo-frame' style={{width:size,height:size,borderColor:frame?frame:"white"}}>
            <div className='user-photo-container' style={{width:size-10,height:size-10}}>
                <img src={img} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
            {status && <div className={`status ${statusStyle}`} style={{backgroundColor:status==='active'?'rgb(34,197,94)':'red'}}/>}
            {value && 
            <Value
            containerStyle={'user-photo-value-container'}
            value={value}
            />}
        </div>
    );
}

export default UserPhoto;