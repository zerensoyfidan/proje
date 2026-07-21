import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3, padding: 4, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
          Kayıt Olma Ekranı
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
         kayıt formu alanları
        </Typography>

        <Button 
          fullWidth 
          variant="text" 
          onClick={() => navigate('/login')}
          sx={{ color: '#1a237e', textTransform: 'none' }}
        >
          Zaten hesabınız var mı? Giriş Yapın
        </Button>
      </Box>
    </Container>
  );
}

export default Register; 