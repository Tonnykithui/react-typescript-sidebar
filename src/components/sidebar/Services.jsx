import React from 'react'
import Card from '../card/Card'
import { FiSlack } from 'react-icons/fi';
import { FaJira } from "react-icons/fa";
import { TbBrandIntercom } from "react-icons/tb";

const Services = () => {
    const linkArr = [
        {
            id:1,
            name:'Jira Software',
            icon:<FaJira />,
            url:''
        },
        {
            id:2,
            name:'Slack',
            icon:<FiSlack />,
            url:''
        },
        {
            id:3,
            name:'Intercom',
            icon:<TbBrandIntercom />,
            url:''
        }
    ]
    return (
        <div className="services">
            <p className='font-semibold'>Service</p>
            <Card linkArr={linkArr}/>
        </div>
    )
}

export default Services