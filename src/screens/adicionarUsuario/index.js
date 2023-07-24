import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getAPIClient } from '@/services/axios'

const UserRegistration = (ctx) => {
  const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const api = getAPIClient(ctx);

  const handleInputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (user.password !== user.confirmPassword) {
      alert('As senhas não correspondem')
    } else {
      const result = await api.post('/storeUser', {
        name: user.name,
        email: user.email,
        password: user.password,
        role: 'user'
      })

      alert('Usuário criado com sucesso!');
    }
  }

  return (
    <Container component="main">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '30px', marginBottom: '100px' }}>
        <h1>Adicionar usuário</h1>
        <Typography variant="body1" color="textSecondary" sx={{maxWidth: '550px', marginTop: '10px'}} paragraph>
          Preencha os campos abaixo para adicionar um novo usuário ao sistema. 
          Certifique-se de que o endereço de e-mail seja válido, pois ele será usado para comunicações futuras.
        </Typography>
        <Box component="form" fullWidth noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar senha"
                type="password"
                id="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default UserRegistration
