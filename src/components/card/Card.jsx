import React from 'react';
import './card.style.css';

const Card = ({linkArr}) => {
    return (
        <div className='card'>
            <ul>
                {
                    linkArr.map(item => {
                        return(
                            <li key={item.id} className='card-list-items'><span>{item.icon}</span> {item.name}</li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default Card