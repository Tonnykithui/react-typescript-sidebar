import React, { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Toggle = () => {

  const [closed, setClosed] = useState(true);

  const  handleBtnState = () => {
    setClosed(!closed);
  }

  return (
    <div className='toggle-btn' onClick={() => handleBtnState()}>
          {
            closed ? <AiOutlineLeft /> : <AiOutlineRight />
          }
    </div>
  )
}

export default Toggle