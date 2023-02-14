import React from 'react'
import './sidebar.style.css';
import profile from '../../img/profile.jpg';

const Profile = () => {
    return (
        <div className="profile">
            <div className="dots-img">
                <div className="span-region">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div className="img-region">
                    <img src={profile} alt="" style={{ objectFit: 'cover', height: '40px', width: '40px' }}
                        class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div>
            <div className="status-name">
                <div className="status">
                    <p className='font-semibold'>Live life!</p>
                    <h1 className='font-bold text-xl'>Mark J.</h1>
                </div>
                <div className="name">
                </div>
            </div>
        </div>
    )
}

export default Profile