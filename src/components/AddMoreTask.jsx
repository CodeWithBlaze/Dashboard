import React from 'react';
import '../css/addmoretask.css';

function AddMoreTask(props) {
    return (
        <div className='addMoreTask-container'>
            <img src='/images/new_task_button.svg' style={{width:20,height:20}} alt='more task button'/>
        </div>
    );
}

export default AddMoreTask;