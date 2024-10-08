// import React from 'react'
//   import Phone2 from '../assets/images/Phone2'
 
// // eslint-disable-next-line react/prop-types
// const CallButton = ({className,text}) => {
//   return (
//     <div className={className}> <Phone2/>Contáctanos</div>
//   )
// }

// export default CallButton



import React from 'react'
  
 const Button = ({className, text, Icon}) => {
  return (
    <div className={className}> {Icon && <Icon   />}{text} </div>
  )
}

export default Button