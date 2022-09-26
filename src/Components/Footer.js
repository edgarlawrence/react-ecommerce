import React from 'react'
import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box 
      component='div'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#33c9dc', 
        color: 'white',
        py: '30px'
      }}  
    >
      Toko Hape <br />
      2021 Trademark Inc  <br />
      Whatsapp: 0124334243324  <br />
    </Box>
  )
}

export default Footer