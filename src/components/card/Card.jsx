import React from 'react'

const Card = ({linkArr}) => {
    return (
        <div className='card'>
            <ul>
                {
                    linkArr.map(item => {
                        return(
                            <li key={item.id}>{item.icon} {item.name}</li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default Card