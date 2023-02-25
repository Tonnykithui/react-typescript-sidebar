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
                <li><span><MdOutlineDashboard /></span> <p>Dashboard</p></li>
                <li><span><IoIosMailUnread /></span> <p>Mail</p></li>
                <li><span><BsFillCalendar2DateFill /></span><p>Calendar</p></li>
                <li><span><IoNotificationsCircleOutline /></span> <p>Notification</p></li>
                <li><span><FcSalesPerformance /></span> <p>Sales</p></li>
            </ul>
        </div>
    )
}

export default Menu