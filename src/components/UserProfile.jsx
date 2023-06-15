import React from 'react';
import UserPhoto from './UserPhoto';

function UserProfile({prfileImage,userName,designation}) {
    return (
        <>
        <UserPhoto 
        img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75'}
        size={45}
        frame={"rgb(59,130,246)"}
        />
        <div className='user-details'>
            <p>Nancy Martino</p>
            <label>Designer</label>
        </div>
        </>
    );
}

export default UserProfile;