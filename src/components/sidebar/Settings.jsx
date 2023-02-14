import React from 'react'
import MButton from '../button/MButton'
import { FiSlack, FiSunrise, FiMessageSquare, FiPhoneOutgoing } from 'react-icons/fi'
import './sidebar.style.css';

const Settings = () => {
    return (
        <>
        <h1>Settings</h1>
        <div className="settings">
            <div className="settings-upper">
                <FiPhoneOutgoing />
                <FiMessageSquare />
                <FiSunrise />
                <FiSlack />
            </div>
            <div className="settings-lower">
                <MButton />
                <h1 className='setting-lower-text'>CREATE NEW TASK</h1>
            </div>
        </div>
        </>
    )
}

export default Settings