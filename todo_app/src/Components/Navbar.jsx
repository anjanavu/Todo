import React from 'react'
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            style={{ color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
            <Link to='/'style={{ textDecoration: 'none' }} ><Typography textAlign="center">Home</Typography></Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
            <Link to='/add'style={{ textDecoration: 'none' }}> <Typography textAlign="center">Add</Typography></Link> 
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Link to='/'style={{ textDecoration: 'none' }}><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
            Home
          </Button></Link>
         <Link to='/add'style={{ textDecoration: 'none' }}><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
            Add
          </Button></Link> 
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar
