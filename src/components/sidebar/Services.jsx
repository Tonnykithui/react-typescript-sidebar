import React from 'react'
import Card from '../card/Card'

const Services = () => {
    const linkArr = [
        {
            id:1,
            name:'Jira Software',
            icon:'',
            url:''
        },
        {
            id:2,
            name:'Slack',
            icon:'',
            url:''
        },
        {
            id:3,
            name:'Intercom',
            icon:'',
            url:''
        }
    ]
    return (
        <div className="services">
            <h1>Service</h1>
            
            <Card linkArr={linkArr}/>
        </div>
    )
}

export default Services