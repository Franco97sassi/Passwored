import React from 'react'
import { Box } from '@mui/material';

const SendButton = ({className,text}) => {
  return (
     <Box 
      className={className} 
      component="button"
      sx={{
        backgroundColor: '#8E2DE2',
        padding: '19px',
        marginLeft:"-10%",
        width: {
          xs: "50%",   
          sm: "17%",  
        },        height: 'auto',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '50px',
        color: 'white',
        fontSize: '20px',
        border: 'none',
        boxShadow: 'none',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        '&:hover': {
          backgroundColor: '#7A1FCE', 
        }
      }}
    >
      {text}
    </Box>
  )
}

export default SendButton