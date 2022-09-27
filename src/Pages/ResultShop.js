import React from 'react'
import { Box, Container } from '@mui/system'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { resultItemCard } from '../Data/data.js'

export default function ResultShop() {
  return (
    <Box component='div'>
        <Container disableGutters>
            <Grid container spacing={2} sx={{ m: '10px' }}>
                <Grid item lg={4}>
                    <Box component='div' className='filters' sx={{ backgroundColor: 'yellow', py: '30px', px: '30px', borderRadius: '16px'}}>
                    <FormGroup>
                      <Typography variant='h4' component='h4' sx={{ py: '20px' }}> Filter </Typography>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Harga Tertinggi" sx={{ p: '10px' }} />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Harga Terendah" sx={{ p: '10px' }} />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Barang Terbaru" sx={{ p: '10px' }} />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Barang Terlama" sx={{ p: '10px' }} />
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Barang Diskon" sx={{ p: '10px' }} />
                      <Box sx={{ p: '10px' }}>
                        <Typography> Range Harga </Typography>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                      </Box>
                    </FormGroup>
                    </Box>
                </Grid>
                <Grid item lg={8}>
                    <Box 
                    component='div'
                    sx={{ display: 'flex', flexWrap: 'wrap' }}
                >
                    {resultItemCard.map((item, i) => 
                        <Card sx={{ maxWidth: 345, m: '15px', textAlign: 'left' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {item.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small">Add to Cart</Button>
                            <Button size="small">Buy</Button>
                            </CardActions>
                        </Card>
                    )}
                </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
