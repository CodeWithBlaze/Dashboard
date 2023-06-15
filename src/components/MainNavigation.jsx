import React from 'react';
import SearchBar from './SearchBar';
import NavbarMenu from './NavbarMenu';
import UserPhoto from './UserPhoto';
import Navbar from './Navbar';
import { MainNavbarMenu } from '../data/data';

function MainNavigation(props) {
    return (
        <Navbar>
            <div className='common-flex-container'>
                <SearchBar>
                    <img src='/images/input.svg' style={{width:20,height:20}}/>
                </SearchBar>
                    <img src='/images/keyboard_voice.svg' style={{width:20,height:20,marginLeft:30}}/>
            </div>
            <NavbarMenu menu={MainNavbarMenu} showActiveIndicator={false}/>
            <div className='common-flex-container'>
                <img src='/images/folder_open.svg' style={{width:20,height:20}}/>
                <img src='/images/notifications_none.svg' style={{width:20,height:20,marginLeft:10,marginRight:10}}/>
                <UserPhoto
                    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=32&q=75'}
                    size={35}
                    value={4}
                    frame={'#2563EB'}
                />
            </div>
        </Navbar>
    );
}

export default MainNavigation;