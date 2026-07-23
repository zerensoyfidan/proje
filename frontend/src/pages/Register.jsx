import { Container, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Alert} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({fullName: '', email:'', password:'', role:'DANISAN'});
  const [error, setError] = useState('');

  const handleChange = (e) =>{
  const { name, value}= e.target;
  setFormData((prevData)=> ({ ...prevData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try{
      await axios.post('http://localhost:8080/api/auth/register', formData);
      navigate('/login');

    } catch (err) {
      console.log("Backend Hata Detayı:", err.response?.data);
    
      const data = err.response?.data;
    
      if(!data) {
        setError('Sunucuya ulaşılamadı veya beklenmeyen bir hata oluştu.');
        return;
      }

      if (typeof data === 'string') {
        setError(data);
      } 
      else if (typeof data === 'object') {
        const fieldError = data.errors?.[0]?.defaultMessage || data.fieldErrors?.[0]?.defaultMessage;
    
        if (fieldError) {
          setError(fieldError);
        }
        else if (data.message && data.message !== 'Bad Request' && !data.message.includes('Validation failed')) {
          setError(data.message);
        } 
        else {
          setError('Lütfen girdiğiniz bilgileri (şifre, e-posta) kontrol edin.');
        }
    
      } else {
        setError('Kayıt başarısız, lütfen tekrar deneyin.');
      }
    }
  }

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3, padding: 4, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#1a237e'}}>
          Kayıt Ol
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}
        
       <Box component='form' onSubmit={handleSubmit} sx={{width: '100%'}}>
       <TextField margin="normal" required fullWidth id="fullName" label="Ad Soyad" name="fullName" autoComplete="name" autoFocus value={formData.fullName} onChange={handleChange}/>
       <TextField margin="normal" required fullWidth id="email" label="E-posta Adresi" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange}/>
       <TextField margin="normal" required fullWidth name="password" label="Şifre" type="password" id="password" autoComplete="new-password" value={formData.password} onChange={handleChange}/>

       <FormControl fullWidth margin="normal" required>
       <InputLabel id="role-label">Kullanıcı Rolü</InputLabel>
       <Select labelId="role-label" id="role" name="role" value={formData.role} label="Kullanıcı Rolü" onChange={handleChange}>
        <MenuItem value="DANISAN">Danışan</MenuItem>
        <MenuItem value="PSIKOLOG">Psikolog</MenuItem>
       </Select>
       </FormControl>
       
       <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2, padding: '12px', backgroundColor: '#1a237e', '&:hover': { backgroundColor: '#0d134a' }, fontWeight: 'bold'}}>
          Kayıt Ol
        </Button>
        <Button 
          fullWidth 
          variant="text" 
          onClick={() => navigate('/login')}
          sx={{ color: '#1a237e', textTransform: 'none' }}>
          Zaten hesabınız var mı? Giriş Yapın
        </Button>
      </Box>
      </Box>
    </Container>
  );
}

export default Register; 