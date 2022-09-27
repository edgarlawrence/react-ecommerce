import React from 'react'
import { Typography, Box, TextField, Button } from '@mui/material'
import { TextareaAutosize } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
    const [job, setJob] = React.useState('');   
    const handleChange = (event) => {
      setJob(event.target.value);
    };

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }
  return (
    <Box component='div'>
        <Box component='div' className='signup-title'>
            <Typography component='h3' variant='h3' sx={{ textAlign: 'center' }}> Sign Up </Typography>
        </Box>
        <FormControl sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '50rem', mx: 'auto' }}>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', p: '10px' }}>
                <Typography component='label' variant='label' sx={{ py: '20px' }}> Nama Lengkap </Typography>
                <TextField type='text'/>
            </Box>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', p: '10px' }}>
                <Typography component='label' variant='label' sx={{ py: '20px' }}> Email </Typography>
                <TextField  type='email' />
            </Box>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', p: '10px' }}>
                <Typography component='label' variant='label' sx={{ py: '20px' }}> Password </Typography>
                <TextField type='password' />
            </Box>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', p: '10px' }}>
                <Typography component='label' variant='label' sx={{ py: '20px' }}> Alamat </Typography>
                <TextField type='text' />
            </Box>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'column', p: '10px' }}>
                <Typography component='label' variant='label' sx={{ py: '20px' }}> Tanggal Lahir </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Tulis alamat anda"
                  style={{ width: 750, height: 150 }}
                />
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <Typography component='label' variant='label' sx={{ py: '20px' }}> Pekerjaan</Typography> <br />
                <Select
                  value={job}
                  onChange={handleChange}
                  sx={{
                    width: '48rem'
                  }}
                >
                  <MenuItem value={1}>Pegawai Pemerintah</MenuItem>
                  <MenuItem value={2}>Pegawai Swasta</MenuItem>
                  <MenuItem value={3}>Wirausaha</MenuItem>
                </Select>
            </Box>

            <Box component='div' sx={{ pt: '30px', mx: 'auto' }}>
                <ReCAPTCHA
                    sitekey='6LdF0zMiAAAAAOzh7jQWVXiUee5Yn_-rS_IPm-MQ'
                    onChange={onChange}
                  />
            </Box>

            <Box sx={{ mx: 'auto', py: '3rem' }}>
                <Button type='submit' variant='contained'> Sign Up </Button>
            </Box>
        </FormControl>
    </Box>
  )
}
