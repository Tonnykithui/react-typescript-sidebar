import React from 'react'
import MButton from '../button/MButton'
import { FiSlack, FiSunrise, FiMessageSquare, FiPhoneOutgoing } from 'react-icons/fi'
import './sidebar.style.css';

const Settings = () => {
    return (
        <>
        <p className='font-semibold'>Settings</p>
        <div className="settings">
            <div className="settings-upper">
                <FiPhoneOutgoing />
                <FiMessageSquare />
                <FiSunrise />
                <FiSlack />
            </div>
            <div className="settings-lower">
                <MButton />
                <h3 className='setting-lower-text'>CREATE NEW TASK</h3>
            </div>
        </div>
        </>
    )
}

export default Settings