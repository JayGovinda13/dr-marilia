import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import backgroundImage from '/src/assets/marilia1.jpg';
import { Button1, Button3 } from '../Buttons/Buttons';

const Body = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background fixo ocupando toda a página */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      />

      {/* Container alinhando o Box à esquerda */}
      <Box
        sx={{
          width: '100%',  
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-start', // alinha à esquerda
          alignItems: 'start',
          minHeight: '100vh',
        }}
      >
        {/* Box 1 ocupando 50% da tela */}
        <Box
          sx={{
            width: '50%',
            height: '80vh',
            padding: 7,
            borderRadius: 2,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: '#8F6A5D', fontWeight: 'bold', mb: 2, whiteSpace: 'pre-line' }}>
            A Ortodontia do Futuro é Agora!{"\n"}Alinhadores Invisíveis
          </Typography>
          <Typography sx={{ color: '#8F6A5D', mb: 3 }}>
            Uma forma moderna, confortável e eficiente de transformar o seu sorriso em pouco tempo!
          </Typography>
          <Button3 />
        </Box>
      </Box>
    </Box>
  );
};

export default Body;
