import { AppBar, Link, Box, Toolbar, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery('(max-width: 900px)');
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    color: '#ffffff',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    '&:hover': {
      color: '#3F5853',
      transition: 'color 0.3s ease'
    }
  };

  const mainLinks = [
    'Sobre o Invisalign®', 
    'Vantagens', 
    'Dúvidas', 
    'Sobre o iTero®', 
    'Contato', 
    'Dra. Marília',
    'FAQ', 
    'Localização'
  ];

  return (
    <AppBar 
      sx={{
        width: '100%',
        height: { xs: '80px', md: '112px' },
        backgroundColor: '#CEAA9E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Toolbar 
        sx={{
          width: '100%',
          maxWidth: '1125px',
          height: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
          padding: { xs: '0 20px', md: '0' }
        }}
      >
        {/* Desktop View */}
        {!isMobile && (
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: { md: '20px', lg: '40px' }
          }}>
            {/* Grupo Esquerdo */}
            <Box sx={{ display: 'flex', gap: { md: '20px', lg: '40px' } }}>
              {mainLinks.slice(0, 6).map((texto) => (
                <Link key={texto} href="#" sx={linkStyle}>
                  {texto}
                </Link>
              ))}
            </Box>

            {/* Grupo Direito */}
            <Box sx={{ display: 'flex', gap: { md: '20px', lg: '40px' } }}>
              {mainLinks.slice(6).map((texto) => (
                <Link key={texto} href="#" sx={linkStyle}>
                  {texto}
                </Link>
              ))}
            </Box>
          </Box>
        )}

        {/* Mobile View */}
        {isMobile && (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: '100%',
                  maxWidth: '300px',
                  backgroundColor: '#CEAA9E'
                }
              }}
            >
              {mainLinks.map((item) => (
                <MenuItem 
                  key={item} 
                  onClick={handleClose}
                  sx={{ justifyContent: 'center' }}
                >
                  <Link href="#" sx={linkStyle}>
                    {item}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;