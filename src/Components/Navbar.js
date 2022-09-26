import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Button, Typography } from '@mui/material';

/// Material UI Icon
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

/// material UI List 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function Navbar() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)

  const setClicked1 = () => {
    setOpen1(!open1)
    console.log(open1)
  }

  const setClicked2 = () => {
    setOpen2(!open2)
    console.log(open2)
  }

  const setClicked3 = () => {
    setOpen3(!open3)
    console.log(open3)
  }

  const NotificationUI = () => {
    return (
      <Box
        sx={{
          display: open1 ? 'block' : 'none',
          position: 'absolute',
          zIndex: '10',
          width: '200px',
          height: '1',
          backgroundColor: 'white',
          color: 'black',
          border: '1',
          top: '50px',
          py: '35px',
          px: '20px'
        }} 
      >
      <Typography component='span' variant='span'> tidak adanya notifikasi </Typography>
    </Box>
    )
  }

  const CartUI = () => {
    return (
      <Box
        component='div'
        sx={{
          display: open2 ? 'block' : 'none',
          position: 'absolute',
          zIndex: '10',
          width: '200px',
          height: '1',
          backgroundColor: 'white',
          color: 'black',
          border: '1',
          top: '50px',
          py: '35px',
          px: '20px'
        }} 
      >
        <Typography  component='span' variant='span'> Keranjang Anda Kosong </Typography>
      </Box>
    )
  }

  const MenuUI = () => {
    return (
        <Box 
            component='div' 
            sx={{ 
                  display: open3 ? 'block' : 'none',
                  position: 'absolute',
                  zIndex: '10',
                  height: '1',
                  color: 'black',
                  border: '1',
                  top: '50px',
                  right: '0',
                  py: '35px',
                  px: '20px',
                  width: '150px', 
                  height: '200px',
                  bgcolor: 'white' 
                }}
        >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    )
  }

  return (
    <Box sx={{ backgroundColor: '#33c9dc', color: 'white' }}>
      <Container 
         sx={{ 
             display: 'flex', 
             justifyContent: 'space-between',
             alignItems: 'center'
             }}
      >
          <Box className='box1' sx={{ color: 'black', display: {xs: 'none', sm: 'block'} }}>
              <h1> Jualan </h1>
          </Box>

          <Box className='box2'>
            <TextField
              sx={{
                width: {xs: '15rem', sm: '40rem'}
              }}
            />
          </Box>

          <Box className='box3'>
              <Button variant='text' sx={{color: 'white'}} onClick={setClicked1} >
                  <NotificationsIcon sx={{ p: '10px' }} />
                  <NotificationUI />
              </Button>
              <Button variant='text' sx={{color: 'white'}} onClick={setClicked2}>
                  <ShoppingBasketIcon sx={{ p: '10px' }} />
                  <CartUI />
              </Button>
              <Button variant='text' sx={{color: 'white'}} onClick={setClicked3}>
                  <AccountCircleIcon sx={{ p: '10px' }} />
                  <MenuUI />
              </Button>
          </Box>
      </Container>
    </Box>
  )
}

export default Navbar