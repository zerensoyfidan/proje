import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, AppBar, Toolbar, Typography, Card, CardContent,BottomNavigation,BottomNavigationAction, Paper, Container} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import MicIcon from '@mui/icons-material/Mic';

function Analysis() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const fakeAnalyses = [
    { id: 1, date: '18.07.2026', title: 'Özet', summary: 'içerik' },
    { id: 2, date: '15.07.2026', title: 'Özet2', summary: 'içerik' },
  ];

  return (
    <Box sx={{ pb: 7, minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            Danışan Paneli
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}>
  <Container maxWidth="sm"> 
    
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#1a237e', textAlign: 'center' }}>
      Geçmiş Özetler
    </Typography>

    {fakeAnalyses.map((analysis) => (
      <Card key={analysis.id} sx={{ mb: 2, boxShadow: 2, '&:hover': { boxShadow: 4 } }}>
        <CardContent sx={{ textAlign: 'center' }}> 
          <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
            {analysis.date}
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
            {analysis.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {analysis.summary}
          </Typography>
        </CardContent>
      </Card>
    ))}

  </Container>
</Box>          
    </Box>
  );
}

export default Analysis;
