import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import backgroundImage from '/src/assets/marilia1.jpg';
import { Button3 } from '../Buttons/Buttons';
import logo from '/src/assets/logo.png';

const Body = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const appBarHeight = isMobile ? 56 : 64;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minHeight: `calc(100vh - ${appBarHeight}px)`,
      overflow: 'hidden',
      mt: `${appBarHeight}px`,
      width: '100vw',
      marginLeft: '-210px'
    }}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      >
        {/* Inner Box with right border at half the screen */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 0,
            pl: isMobile ? 2 : 7,
            py: 4,
            width: '50%', // Occupy half the screen
            position: 'absolute', // Position it absolutely
            left: 0, // Align to the left
            top: 0, // Align to the top
            height: '100%', // Full height
          }}
        >
          {/* Logo positioned absolutely */}
          <Box
            sx={{
              left: '440.89px', // X position
              top: '228px', // Y position
              width: '443.21px', // Width
              height: '395px', // Height
            }}
          >
            <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </Box>

          <Typography variant="h5" sx={{
            color: '#8F6A5D',
            fontWeight: 'bold',
            mb: 2,
            whiteSpace: 'pre-line',
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            width: '95%',
          }}>
            A Ortodontia do Futuro é Agora!{"\n"}Alinhadores Invisíveis
          </Typography>

          <Typography sx={{
            color: '#8F6A5D',
            mb: 3,
            fontSize: { xs: '0.875rem', md: '1rem' },
            width: '90%'
          }}>
            Uma forma moderna, confortável e eficiente de transformar o seu sorriso em pouco tempo!
          </Typography>

          <Button3 sx={{
            width: { xs: '100%', md: 'auto' },
            marginLeft: { xs: 0, md: '4px' }
          }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Body;