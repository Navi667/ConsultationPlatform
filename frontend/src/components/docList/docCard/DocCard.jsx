import React from 'react';
import "./DocCard.css"

function DocCard() {
  return (
    <div className='doc-card'>
        <img className='doc-pic' src={"https://avatar.iran.liara.run/public/boy?username=wangyi"} alt=''></img>
        <h1 className='doc-name'>李医生</h1>
        <span className='doc-position'>副主任医师</span>
        <span className='doc-hos'>四川大学华西第二医院</span>
    </div>
  )
}

export default DocCard