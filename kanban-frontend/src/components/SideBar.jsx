import React from 'react';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi/home';
import appsIcon from '@iconify-icons/mdi/apps';
import calendarIcon from '@iconify-icons/mdi/calendar';
import messageIcon from '@iconify-icons/mdi/message';
import peopleIcon from '@iconify-icons/mdi/people';
import accountIcon from '@iconify-icons/mdi/account-circle';
import { Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { QuestionCircleFilled } from '@ant-design/icons';

const items = [
  { key: 'home', icon: <Icon icon={homeIcon} />, label: 'Home' },
  {
    key: 'projects',
    label: 'Projects',
    icon: <Icon icon={appsIcon} />,
    children: [
      { key: 'project1', label: 'Project 1' },
      { key: 'project2', label: 'Project 2' },
    ],
  },
  { key: 'calendar', icon: <Icon icon={calendarIcon} />, label: 'Calendar' },
  { key: 'messages', icon: <Icon icon={messageIcon} />, label: 'Messages' },
  { key: 'people', icon: <Icon icon={peopleIcon} />, label: 'People' },
  { key: 'account', icon: <Icon icon={accountIcon} />, label: 'Account' },
];

const SideBar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 256, height: '100vh', borderRight: 'thick'  }}>
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#ffffff', 
        textAlign: 'center', 
        fontSize: '14px', 
        color: '#65558f',
      }}>
        Bear Brown and Company
      </div>
      <Menu
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          padding: '20px',
          textAlign:'start'
        }}
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['projects']}
        items={items}
        onClick={onClick}
        theme="light"
      />
       <div style={{ padding: '16px'}}>
          <Button type="primary" shape="round" icon={<QuestionCircleFilled />} iconPosition={'start'} size={'large'} style={{backgroundColor: '#d9d9d9', color:'#65558f', fontWeight: 'bold',}}>
HELP          </Button>
        </div>
    </div>
  );
};

export default SideBar;
