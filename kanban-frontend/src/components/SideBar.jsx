import React from 'react';
import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi/home';
import appsIcon from '@iconify-icons/mdi/apps';
import calendarIcon from '@iconify-icons/mdi/calendar';
import messageIcon from '@iconify-icons/mdi/message';
import chartBoxIcon from '@iconify-icons/mdi/chart-box';
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
  { key: 'reports', icon: <Icon icon={chartBoxIcon} />, label: 'Reports' },
  { key: 'people', icon: <Icon icon={peopleIcon} />, label: 'People' },
  { key: 'account', icon: <Icon icon={accountIcon} />, label: 'Account' },
];

const SideBar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <div className="sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['projects']}
        onClick={onClick}
      >
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <span className="menu-text">{item.label}</span>
          </Menu.Item>
        ))}
      </Menu>
      <div className="help-button">
        <Button 
          type="primary" 
          shape="round" 
          icon={<QuestionCircleFilled />} 
          size='large' 
          style={{ backgroundColor: '#d9d9d9', color: '#000', fontWeight: 'bold' }}
        >
          Help
        </Button>
      </div>
    </div>
  );
};

export default SideBar;