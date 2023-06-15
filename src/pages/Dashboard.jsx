import React from 'react';
import '../css/dashboard.css';
import Heading from '../components/Heading';
import UserPhoto from '../components/UserPhoto';
import NavbarMenu from '../components/NavbarMenu';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Photoset from '../components/Photoset';
import IconBoard from '../components/IconBoard';
import TaskContainer from '../components/TaskContainer';
import TaskBox from '../components/TaskBox';
import Tag from '../components/Tag';
import { backLogsTask,inProgressTask,doneTask,todoTask,SubMenu,users,taskUsers,sideDashboardMenu,sideProjectMenu, otherUsers, STATUS } from '../data/data';
import UserProfile from '../components/UserProfile';
import SideMenu from '../components/SideMenu';
import MainNavigation from '../components/MainNavigation';

function wrapTagsIntoComponent(tags){
    const tagComponents = []
    tags.forEach(tag=>{
        tagComponents.push(<Tag title={tag.title} bgColor={tag.bgColor} color={tag.color} borderColor={tag.borderColor}/>)
    })
    console.log(tagComponents)
    return tagComponents
}


function Dashboard(props) {
    
    return (
        <div className='main-container'>
            <div className='fullscreen-container navigation-container'>
                <Heading 
                text="Dashboard" 
                logo={'images/menu_open.svg'}
                textStyleClass='heading-text'
                containerStyleClass='heading-container'
                />
                <div className='user-details-container heading-container-marginal'>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <UserProfile
                        prfileImage={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75'}
                        userName={'Nancy Martino'}
                        designation={'Designer'}
                        />
                    </div>
                    <img src={'/images/unfold_more.svg'}/>
                </div>
                <Heading 
                text={'DASHBOARDS'}
                logo={'images/expand_less.svg'}
                textStyleClass='heading-navigation-container'
                containerStyleClass='heading-container-marginal'
                >
                    <SideMenu menuItems={sideDashboardMenu}/>
                </Heading>
                <Heading 
                text={'PROJECTS'}
                logo={'images/expand_less.svg'}
                textStyleClass='heading-navigation-container'
                containerStyleClass='heading-container-marginal'>
                    <SideMenu menuItems={sideProjectMenu}/>
                </Heading>
            </div>
            <div className='fullscreen-container content-container'>
                <div className='heading-container main-task-container'>
                    <MainNavigation/>
                </div>
                <div className='task-board-menu'>
                    <div className='task-board-container'>
                        <Heading 
                        text={'Task Boards'} 
                        logo={'/images/edit.svg'}
                        imgStyleClass='taskboard-img'
                        textStyleClass='taskboard-text'
                        />
                    </div>
                    <Navbar>
                        <NavbarMenu menu={SubMenu} showActiveIndicator activeColor={'#2563EB'}/>
                    </Navbar>
                    <div className='common-flex-container'>
                        <Photoset users={users} addMoreButton/>
                    </div>
                </div>
                <div className='Board-Nav-Menu'>
                    <div style={{display:'flex',width:'fit-content',paddingRight:20,borderRight:'1px solid #e5e7eb'}}>
                        <IconBoard
                        title={'Board View'}
                        img={'/images/dashboard.svg'} 
                        customContainerStyle={'multi-board-1'}/>
                        <IconBoard 
                        title={'Table View'}
                        img={'/images/hamburger.svg'}
                        customContainerStyle={'multi-board-2'}/>
                    </div>
                    <div style={{display:'flex',width:'fit-content',marginLeft:10,paddingRight:10,borderRight:'1px solid #e5e7eb'}}>
                        <IconBoard
                        title={'Limited Access'}
                        img={'/images/lock.svg'} 
                        customContainerStyle={'transparent-background'}/>
                        <IconBoard
                        img={'/images/keyboard_arrow_down.svg'} 
                        customContainerStyle={'transparent-background'}/>
                    </div>
                    <div style={{display:'flex',width:'fit-content',paddingRight:20}}>
                        <IconBoard
                        title={'Owners'}
                        customContainerStyle={'transparent-background'}/>
                        <IconBoard
                        imageStyle={{width:30,height:30}}
                        img={'/images/twitter.svg'}
                        title={'Twitter Team'} 
                        customContainerStyle={'transparent-background'}/>
                    </div>
                    <div style={{display:'flex',width:'fit-content',paddingRight:20}}>
                        <SearchBar width={150} height={40}/>
                    </div>
                    <div style={{display:'flex',width:'fit-content',paddingRight:20}}>
                        <IconBoard
                        customContainerStyle={'board-icon-list'}
                        img={'/images/select_file.svg'}
                        />
                        <IconBoard
                        customContainerStyle={'board-icon-list'}
                        img={'/images/center_align.svg'}
                        />
                        <IconBoard
                        customContainerStyle={'board-icon-list'}
                        img={'/images/left_align.svg'}
                        />
                        <IconBoard
                        customContainerStyle={'board-icon-list'}
                        img={'/images/shape_circles.svg'}
                        />
                        <IconBoard
                        customContainerStyle={'board-icon-list'}
                        img={'/images/customize_arrangement.svg'}
                        />
                    </div>
                </div>
                <div className='parent-task-container'>
                    <TaskContainer 
                    valueBgColor={'rgb(202,138,4,0.1)'} 
                    valueTextColor={'#CA8A04'}
                    value={5}
                    title={'Backlog Tasks'}
                    >
                        {
                            backLogsTask.map(task=>
                            <TaskBox
                                title={task.title}
                                value={task.value}
                                tags={wrapTagsIntoComponent(task.tags)}
                                users={task.users}
                                showAttachents={task.attachment}
                            /> )
                        }
                    
                     
                    </TaskContainer>
                    <TaskContainer 
                    valueBgColor={'rgb(219,39,119,0.1)'} 
                    valueTextColor={'#DB2777'}
                    value={5}
                    title={'To Do Tasks'}
                    >
                        {
                            todoTask.map(task=>
                            <TaskBox
                                title={task.title}
                                value={task.value}
                                tags={wrapTagsIntoComponent(task.tags)}
                                users={task.users}
                                showAttachents={task.attachment}
                            /> )
                        }
                    </TaskContainer>
                    <TaskContainer 
                    valueBgColor={'rgb(147,51,234,0.1)'} 
                    valueTextColor={'#9333EA'}
                    value={5}
                    title={'In Progress'}
                    >
                        {
                            inProgressTask.map(task=>
                            <TaskBox
                                title={task.title}
                                value={task.value}
                                tags={wrapTagsIntoComponent(task.tags)}
                                users={task.users}
                                showAttachents={task.attachment}
                            /> )
                        }
                    </TaskContainer>
                    <TaskContainer 
                    valueBgColor={'rgb(22,163,74,0.1)'} 
                    valueTextColor={'#16A34A'}
                    value={5}
                    title={'Done'}
                    >
                       {
                            doneTask.map(task=>
                            <TaskBox
                                title={task.title}
                                value={task.value}
                                tags={wrapTagsIntoComponent(task.tags)}
                                users={task.users}
                                showAttachents={task.attachment}
                            /> )
                        }  
                    </TaskContainer>
                </div>
            </div>
            <div className='fullscreen-container containeruser-container'>
                <div className='user-panel-controller'>
                    <div className='heading-container'>
                        <img src='/images/close.svg'/>
                    </div>
                    <div className='users-panel-container'>
                        {
                            otherUsers.map(user=>
                            <UserPhoto
                                img={user.img}
                                size={45}
                                status={user.status}
                                value={user.value}
                                frame={user.status === STATUS.ACTIVE?'#2563EB':'white'}
                            />)
                        }
                            
                            
                            
                    </div>
                    <div className='heading-container'>
                        <img src='/images/arrow_forward.svg'/>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Dashboard;