import React from 'react'
import './sidebar.style.css';
import Profile from './Profile';
import Menu from './Menu';
import Services from './Services';
import Settings from './Settings';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <Profile />
        <Menu />
        <Services />
        <Settings />
      </div>
    </div>
  )
}

export default Sidebar