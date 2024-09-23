import React from 'react'
  import Phone2 from '../assets/images/Phone2'
 
// eslint-disable-next-line react/prop-types
const CallButton = ({className,text}) => {
  return (
    <div className={className}> <Phone2/>{text}</div>
  )
}

export default CallButton