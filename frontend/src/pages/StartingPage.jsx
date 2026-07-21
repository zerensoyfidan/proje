import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';

function StartingPage() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box 
                sx={{ 
                    marginTop: 15, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 3,
                    padding: 5,
                    borderRadius: 3,
                    backgroundColor: 'white',
                    textAlign: 'center'
                }}
            >
                <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#1a237e' }}>
                    Yapay Zeka Destekli Psikolog Danışman
                </Typography>

                <Typography variant="body1" sx={{ mb: 5, color: 'text.secondary' }}>
                 Hoş geldiniz. Devam etmek için lütfen giriş yapın veya yeni bir hesap oluşturun.
                </Typography>

                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => navigate('/login')}
                        sx={{ 
                            backgroundColor: '#1a237e', 
                            '&:hover': { backgroundColor: '#0d134a' }, 
                            borderRadius: '8px',
                            padding: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        Giriş Yap
                    </Button>


                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => navigate('/register')}
                        sx={{ 
                            color: '#1a237e',
                            borderColor: '#1a237e',
                            '&:hover': { borderColor: '#0d134a', backgroundColor: '#f5f5f5' }, 
                            borderRadius: '8px',
                            padding: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        Kayıt Ol
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default StartingPage;