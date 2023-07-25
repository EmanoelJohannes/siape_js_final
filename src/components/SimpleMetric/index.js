import React from 'react'

import { Box } from '@mui/material'

export const SimpleMetric = ({ title, value, color, size }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        height: '100px',
        width: '100%',
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          borderLeft: '5px solid rgb(79 187 182)',
          width: '100%'
        }}
      >
        <h1 style={{ fontSize: '14px', marginBottom: '5px' }}>{title}</h1>
        <h1 style={{ color: 'rgb(79 187 182)', fontWeight: 'bolder' }}>
          {value}
        </h1>
      </div>
    </Box>
  )
}
