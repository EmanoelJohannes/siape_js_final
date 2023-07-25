import React from 'react';

import { Box, Grid } from '@mui/material';

export const Metrics = ({ title, value, color, size }) => {

  return (
      <Box
        sx={{
          backgroundColor: '#FFF',
          height: '250px',
          padding: '4px',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ fontSize: '14px' }}>{title}</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '175px',
            height: '175px',
            backgroundColor: color,
            borderRadius: '50%'
          }}
        >
          <h1
            style={{ color: 'white', fontWeight: 'bolder', fontSize: '25px' }}
          >
            {value}
          </h1>
        </div>
      </Box>
  );
};
