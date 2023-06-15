import ShowMore from "../components/ShowMore"
import UserPhoto from "../components/UserPhoto"


export const MainNavbarMenu=['Dashboard','My Tasks','Reporting','Portfolios','Goals']
export const SubMenu=['Timeline','Calender','Dashboard','Progress','Forms','More']
export const users = [
    <UserPhoto
    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75'}
    size={40}
    />,
    <UserPhoto
    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75'}
    size={40}
    />,
    <UserPhoto
    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75'}
    size={40}
    />,
    <UserPhoto
    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75'}
    size={40}
    />,
    <ShowMore number={5} size={35}/>
]
export const taskUsers = [
    <UserPhoto
    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75'}
    size={35}
    />,
    <UserPhoto
    img={'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75'}
    size={35}
    />,
    <ShowMore number={5} size={35}/>
]
export const sideDashboardMenu=[
    {
        img:'/images/inbox.svg',
        value:4,
        text:'Inbox'
    },
    {
        img:'/images/drive_folder_upload.svg',
        value:435,
        text:'Drive Files'
    },
    {
        img:'/images/dashboard_customize.svg',
        value:5,
        text:'Boards'
    },
    {
        img:'/images/access_time.svg',
        text:'Updates'
    },
    {
        img:'/images/data_usage.svg',
        text:'Analytics',
        value:2
    },
    {
        img:'/images/space_dashboard.svg',
        text:'CRM Dashboard',
        value:2
    },
    {
        img:'/images/sell.svg',
        text:'Ecommerce',
    },
    {
        img:'/images/payment.svg',
        text:'Cryptocurrency',
    },
    {
        img:'/images/lock_clock.svg',
        text:'Projects',
    },
    {
        img:'/images/image_search.svg',
        text:'NFT Marketplace',
    },
    {
        img:'/images/tune.svg',
        text:'Settings',
        value:2
    },
    
    
]
export const sideProjectMenu = [
    {
        img:'/images/tag.svg',
        value:6,
        text:'Addititonal Calender'
    },
    {
        img:'/images/tag.svg',
        value:11,
        text:'Branch Logo Design'
    },
    {
        img:'/images/tag.svg',
        text:'User Research'
    },
    {
        img:'/images/tag.svg',
        text:'Marketing Sales',
        value:23
    },
    {
        img:'/images/tag.svg',
        text:'New Project Template',
        value:2 
    },
    {
        img:'/images/add_circle.svg',
        text:'Add New Project',
        
    },
]
export const STATUS = {
    ACTIVE:'active',
    INACTIVE:'inactive'
}
export const otherUsers = [
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75',
        status:STATUS.INACTIVE,
        value:12
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-5.jpg&w=48&q=75',
        status:STATUS.INACTIVE,
        value:2
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75',
        status:STATUS.ACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75',
        status:STATUS.INACTIVE,
        value:4
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
    {
        img:'https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-5.jpg&w=48&q=75',
        status:STATUS.INACTIVE
    },
]

export const backLogsTask = [
    {
        id:1,
        title:'Model Answer',
        value:4,
        users:taskUsers,
        attachment:4,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Design',
                bgColor:'rgb(37,99,235,0.1)',
                color:'#2563EB',
                
            },
            {
                title:'Backlogs',
                bgColor:'rgb(202,138,4,0.1)',
                color:'#CA8A04'
            }
        ]
    },
    {
        id:2,
        title:'Create calendar, chat and email app pages',
        value:1,
        users:taskUsers,
        attachment:2,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Developement',
                bgColor:'rgb(37,99,235,0.1)',
                color:'#2563EB',
                
            },
            {
                title:'Backlogs',
                bgColor:'rgb(202,138,4,0.1)',
                color:'#CA8A04'
            }
        ]
    },
    {
        id:3,
        title:'Product Design, Figma, Sketch (Software), Prototype',
        value:4,
        users:[taskUsers[0]],
        attachment:4,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Project',
                bgColor:'rgb(37,99,235,0.1)',
                color:'#2563EB',
                
            },
            {
                title:'Backlogs',
                bgColor:'rgb(202,138,4,0.1)',
                color:'#CA8A04'
            }
        ]
    },
    {
        id:4,
        title:'Change email option process',
        value:4,
        users:[taskUsers[0],taskUsers[1]],
        attachment:2,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Backlogs',
                bgColor:'rgb(202,138,4,0.1)',
                color:'#CA8A04'
            }
        ]
    },
    {
        id:5,
        title:'Post launch reminder/ Post list',
        users:[],
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Backlogs',
                bgColor:'rgb(202,138,4,0.1)',
                color:'#CA8A04'
            }
        ]
    },
]

export const todoTask = [
    {
        id:1,
        title:'Model Answer',
        value:4,
        users:taskUsers,
        attachment:4,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Design',
                bgColor:'rgb(37,99,235,0.1)',
                color:'#2563EB',
                
            },
            {
                title:'To Do',
                bgColor:'rgb(219, 39, 119,0.1)',
                color:'#DB2777'
            }
        ]
    },
    {
        id:2,
        title:'Add authentication pages',
        users:[],
        
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'To Do',
                bgColor:'rgb(219, 39, 119,0.1)',
                color:'#DB2777'
            }
        ]
    },
    {
        id:3,
        title:'Profile Page Satructure',
        users:[],
        
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'To Do',
                bgColor:'rgb(219, 39, 119,0.1)',
                color:'#DB2777'
            }
        ]
    },
    {
        id:4,
        title:'Create calendar, chat and email app pages',
        value:2,
        users:[taskUsers[0],taskUsers[1]],
        attachment:1,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'To Do',
                bgColor:'rgb(219, 39, 119,0.1)',
                color:'#DB2777'
            }
        ]
    },
]

export const inProgressTask = [
    {
        id:1,
        title:'Model Answer',
        value:4,
        users:taskUsers,
        attachment:4,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Design',
                bgColor:'rgb(37,99,235,0.1)',
                color:'#2563EB',
                
            },
            {
                title:'InProgress',
                bgColor:'rgb(147, 51, 234,0.1)',
                color:'#9333EA'
            }
        ]
    },
    {
        id:2,
        title:'Create calendar, chat and email app pages',
        value:2,
        users:[taskUsers[0],taskUsers[1],<ShowMore number={3} size={35}/>],
        attachment:1,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'InProgress',
                bgColor:'rgb(147, 51, 234,0.1)',
                color:'#9333EA'
            }
        ]
    },
]
export const doneTask = [
    {
        id:1,
        title:'Model Answer',
        users:taskUsers,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Done',
                bgColor:'rgb(22, 163, 74,0.1)',
                color:'#16A34A',
                
            },
            
        ]
    },
    {
        id:2,
        title:'Create calendar, chat and email app pages',
        users:[taskUsers[0],taskUsers[1],<ShowMore number={3} size={35}/>],
        attachment:2,
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Done',
                bgColor:'rgb(22, 163, 74,0.1)',
                color:'#16A34A',
                
            },
            
        ]
    },
    {
        id:3,
        title:'Product Design, Figma, Sketch (Software), Prototype',
        users:[taskUsers[0]],
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Done',
                bgColor:'rgb(22, 163, 74,0.1)',
                color:'#16A34A',
                
            },
            
        ]
    },
    {
        id:4,
        title:'Model Answer',
        users:[taskUsers[0],taskUsers[1]],
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Done',
                bgColor:'rgb(22, 163, 74,0.1)',
                color:'#16A34A',
                
            },
            
        ]
    },
    {
        id:5,
        title:'Create calendar, chat and email app pages',
        users:[],
        tags:[
            {
                title:'#UI007',
                bgColor:'white',
                color:'black',
                borderColor:'#e5e7eb'
            },
            {
                title:'Done',
                bgColor:'rgb(22, 163, 74,0.1)',
                color:'#16A34A',
                
            },
            
        ]
    },
    
]         