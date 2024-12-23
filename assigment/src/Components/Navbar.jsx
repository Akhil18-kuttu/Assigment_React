import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
  
 
  return (
    <div>
     <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nesto Shoping
          </Typography>
          <Link to='/' >
          <Button variant="contained" > <HomeIcon color="action" /> &nbsp; Home</Button></Link> &nbsp;&nbsp;
          <Link to='/Productpage'>
          <Button variant="contained" >Add Product</Button></Link>
         
        </Toolbar>
      </AppBar>   
    </div>
  )
}

export default Navbar