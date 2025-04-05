import React from 'react';
import Button from '@mui/material/Button';
import CallMadeIcon from '@mui/icons-material/CallMade';

const CustomButton = ({ 
  text, 
  iconSize = 40, 
  center = false,
  backgroundColor = '#6F8781',
  hoverBackgroundColor = '#3F5853',
  customWidth,
  customHeight,
  showIcon = true,
  rounded = true
}) => {
  return (
    <Button
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: rounded ? '50px' : '0',
        '&:hover': {
          backgroundColor: hoverBackgroundColor,
          transform: 'scale(1.05)',
        },
        transition: 'all 0.3s ease',
        color: '#ffffff',
        whiteSpace: 'pre-line',
        padding: '12px 30px',
        fontWeight: 'bold',
        fontSize: '16px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: center ? 'center' : 'space-between',
        width: customWidth || '100%',
        minWidth: customWidth ? customWidth : '300px',
        height: customHeight || '56px',
        boxSizing: 'border-box'
      }}
    >
      <span style={{ 
        textAlign: center ? 'center' : 'left', 
        flex: 1,
        lineHeight: '1.2'
      }}>
        {text}
      </span>
      {showIcon && (
        <CallMadeIcon sx={{ 
          fontSize: iconSize,
          flexShrink: 0
        }} />
      )}
    </Button>
  );
};

// Botão 1 - Com ícone e alinhamento padrão
const Button1 = () => (
  <CustomButton 
    text={`QUERO AGENDAR UMA\nCONSULTA`}
    center={true}
    showIcon={true}
  />
);

// Botão 2 - Com ícone e texto centralizado
const Button2 = () => (
  <CustomButton 
    text={`OUTRA AÇÃO AQUI`}
    center={true}
    showIcon={true}
  />
);

// Botão 3 - Sem ícone e customizado
const Button3 = () => (
  <CustomButton 
    text={`Conheça!`}
    backgroundColor={'#8F6A5D'}
    hoverBackgroundColor={'#61473F'}
    center={true}
    showIcon={true}
    customWidth="195px"
    customHeight="42px"
  />
);

const Button4 = () => (
    <CustomButton 
    text={`ENVIAR`}
    backgroundColor={'#8F6A5D'}
    hoverBackgroundColor={'#61473F'}
    center={true}
    showIcon={false}
    customWidth="195px"
    customHeight="42px"
    rounded={false}
  />
)

export { Button1, Button2, Button3, Button4 };