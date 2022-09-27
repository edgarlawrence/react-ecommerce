import React from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import ReCAPTCHA from "react-google-recaptcha";

export default function SignIn() {

const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <Box 
        component='div'
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Box 
            component='form' 
            sx={{ 
                border: 1,
                borderColor: 'primary.main',
                borderRadius: '16px',
                p: '5rem',
                my: '5rem',       
                }}
        >
        <Typography
            component='h3'
            variant='h3'
            sx={{
                py: '25px'
            }}
        >
            Sign In Page
        </Typography>
            <TextField id="standard-basic" label="Enter Username" type='text' variant="standard" 
                sx={{
                    m: '10px'
                }}
            /> <br />
            <TextField id="standard-basic" label="Enter Password" type='password' variant="standard" 
                sx={{
                    m: '10px'
                }}
            /> <br />

            <Box component='div' sx={{ pt: '30px' }}>
                <ReCAPTCHA
                    sitekey='6LdF0zMiAAAAAOzh7jQWVXiUee5Yn_-rS_IPm-MQ'
                    onChange={onChange}
                  />
            </Box>

            <Button 
                type='submit'
                variant='contained'
                sx={{
                    width: '50%',
                    m: '30px'
                }}    
            > Sign In </Button>
        </Box>
    </Box>
  )
}
