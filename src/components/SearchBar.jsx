import React, { Children } from 'react';
import '../css/searchbar.css';

function SearchBar({children,width=200,height=50}) {
    return (
        <div className='searchbar-container' style={{width,height}}>
            <img src='/images/search.svg' style={{width:20,height:20}}/>
            <input placeholder='Search Task' className='search_input'/>
            {children}
        </div>
    );
}

export default SearchBar;