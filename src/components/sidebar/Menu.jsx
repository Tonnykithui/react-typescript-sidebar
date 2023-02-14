import React from 'react'
import {MdOutlineDashboard} from 'react-icons/md';
import {IoIosMailUnread} from 'react-icons/io';
import {BsFillCalendar2DateFill} from 'react-icons/bs';
import {IoNotificationsCircleOutline} from 'react-icons/io5'
import {FcSalesPerformance} from 'react-icons/fc';

const Menu = () => {
    return (
        <div className="menu">
            <p>Menu</p>
            <ul>
                <li><MdOutlineDashboard /> <p>Dashboard</p></li>
                <li><IoIosMailUnread /> <p>Mail</p></li>
                <li><BsFillCalendar2DateFill /><p>Calendar</p></li>
                <li><IoNotificationsCircleOutline /> <p>Notification</p></li>
                <li><FcSalesPerformance /> <p>Sales</p></li>
            </ul>
        </div>
    )
}

export default Menu