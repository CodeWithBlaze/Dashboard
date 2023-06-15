import React from 'react';
import '../css/taskcontainer.css';
import Value from './Value';
import AddMoreTask from './AddMoreTask';

function TaskContainer({children,title,value,valueBgColor,valueTextColor}) {
    return (
        <div className='task-container'>
            <div className='task-container-details'>
                <div className='common-flex-container'>
                    <p className='task-title'>{title}</p>
                    <Value 
                    value={value} 
                    backgroundColor={valueBgColor}
                    color={valueTextColor}
                    textStyle='task-title-text-value-custom'
                    containerStyle={'task-title-value-custom'}/>
                </div>
                <img src='/images/more_horiz.svg' alt='more menu icon'/>
            </div>
            <div style={{marginTop:30}}>
            {children}
            </div>
            <AddMoreTask/>
        </div>
    );
}

export default TaskContainer;