import React from 'react'
import { Box } from '@mui/system'
import Carousel from 'react-material-ui-carousel'
import { Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {items, itemCard} from '../Data/data.js'

function Home() {
  return (
    <Container>
        <Box>
          <Carousel>
                {items.map((item, i) => 
                    <Box
                      component='img'
                      sx={{ 
                        width: '75%',
                        ml: '150px'
                      }}
                      src={item.img} alt={item.img}
                    />
                    )}      
            </Carousel>

            <Box 
                component='div'
                className='cards-group'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
            >
              <Box sx={{ pr: '44rem', py: '10px', width: '10rem' }}>
                <Typography 
                  component='h6'
                  variant='h6'
                > Barang Terkini </Typography>
              </Box>

              <Box 
                component='div'
                sx={{ display: 'flex', flexBasis: '100%', justifyContent: 'center' }}
              >
              {itemCard.map((item, i) => 
                  <Card sx={{ maxWidth: 345, m: '10px', textAlign: 'left' }}>
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
            </Box>

            <Box 
                component='div'
                className='cards-group'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
            >
              <Box sx={{ pr: '44rem', py: '10px', width: '10rem' }}>
                <Typography 
                  component='h6'
                  variant='h6'
                > Barang Terkini </Typography>
              </Box>

              <Box 
                component='div'
                sx={{ display: 'flex', flexBasis: '100%', justifyContent: 'center' }}
              >
              {itemCard.map((item, i) => 
                  <Card sx={{ maxWidth: 345, m: '10px', textAlign: 'left' }}>
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
            </Box>

            <Box 
                component='div'
                className='cards-group'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
            >
              <Box sx={{ pr: '44rem', py: '10px', width: '10rem' }}>
                <Typography 
                  component='h6'
                  variant='h6'
                > Barang Terkini </Typography>
              </Box>
              
              <Box 
                component='div'
                sx={{ display: 'flex', flexBasis: '100%', justifyContent: 'center' }}
              >
              {itemCard.map((item, i) => 
                  <Card sx={{ maxWidth: 345, m: '10px', textAlign: 'left' }}>
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
            </Box>
        </Box>
    </Container>
  )
}

export default Home