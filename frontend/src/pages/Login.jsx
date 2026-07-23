import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import axios from 'axios';


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword]=useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
       e.preventDefault();
       setError('');

       try{
         
        const response = await axios.post('http://localhost:8080/api/auth/login', {email: email, password: password});

        if(response.data?.role){
            localStorage.setItem('userRole', response.data.role);
        }
        if(response.data?.email){
            localStorage.setItem('userEmail', response.data.email);
        }

        navigate('/analyses');
    }
       catch(err){
 
        console.log('Login Hatası: ', err.response?.data);
        const errorData=err.response?.data;

        if(typeof errorData==='string'){
            setError(errorData);
        }else if(errorData && typeof errorData ==='object'){
            const msg = errorData.errors?.[0].defaultMessage || errorData.message || 'E-posta veya şifre hatalı';
            setError(msg);
        }else{
            setError('E-posta veya şifre hatalı');
        }
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
                 {error}
              </Alert>
          )}

            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
               <TextField
                   margin="normal"
                  required
                  fullWidth
                   type="email"
                   label="E-posta Adresi"
                   value={email}
                   onChange={(e) => {
                   setError(false);
                   setEmail(e.target.value);
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