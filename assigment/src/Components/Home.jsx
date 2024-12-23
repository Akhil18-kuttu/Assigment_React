import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [dats, setdats] = useState([]);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setdats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {dats.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{
                  height: 200,
                  objectFit: 'contain',
                }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Category: {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
