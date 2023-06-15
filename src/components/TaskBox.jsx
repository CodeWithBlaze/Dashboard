import React from 'react';
import '../css/taskbox.css';
import Value from './Value';
import Photoset from './Photoset';



function TaskBox({title,tags=[],value,users=[],showAttachents}) {
    return (
        <div className='taskbox-main-container'>
            <div className='text-and-icon'>
                <p>{title}</p>
                {value && <div className='common-flex-container'>
                    <img src='/images/task-1.svg' alt='task icon'/>
                    <Value 
                    value={value} 
                    backgroundColor={'transparent'}
                    color={'#33BFFF'}
                    />
                </div>}
            </div>
            <div className='task-tags'>
                {
                    tags.map((tag,index)=><span key={index}>{tag}</span>)
                }
            </div>
            <div className='task-users'>
                <Photoset
                users={users}
                addMoreButton
                size={30}
                />
                {showAttachents && <div className='common-flex-container shiftLeft'>
                    <img src='/images/file_present.svg' alt='file icon'/>
                    <Value 
                    value={showAttachents} 
                    backgroundColor={'transparent'}
                    color={'#33BFFF'}
                    />
                    <img src='/images/message.svg' alt='message icon'/>
                    <Value 
                    value={showAttachents} 
                    backgroundColor={'transparent'}
                    color={'#33BFFF'}
                    />
                </div>}
            </div>
            
        </div>
    );
}

export default TaskBox;