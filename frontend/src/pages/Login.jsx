import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';


function Login(){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError] = useState(false);
    const navigate=useNavigate();

    const handleSubmit = (e) => {
       e.preventDefault();
       
       if (username === 'danışan' && password === '1234') {
        navigate('/analyses');
    } else {
        setError(true);
    }
}


    return (
      <Container maxWidth="xs">
      <Box 
          sx={{ 
              marginTop: 8, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              boxShadow: 3,
              padding: 4,
              borderRadius: 2,
              backgroundColor: 'white'
          }}
      >
          <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
              Giriş Ekranı
          </Typography>

          {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                  Kullanıcı adı veya şifre hatalı
              </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Kullanıcı Adı"
                  value={username}
                  onChange={(e) => {
                      setError(false);
                      setUsername(e.target.value);
                  }}
              />
              
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Şifre"
                  type="password"
                  value={password}
                  onChange={(e) => {
                      setError(false);
                      setPassword(e.target.value);
                  }}
              />

              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ 
                    backgroundColor: '#1a237e', 
                    '&:hover': { backgroundColor: '#0d134a' }, 
                    borderRadius: '8px', 
                    mt: 2 }}
              >
                  Giriş Yap
              </Button>
          </Box>
      </Box>
  </Container>
);

}

export default Login;