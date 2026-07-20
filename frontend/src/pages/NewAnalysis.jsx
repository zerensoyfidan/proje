import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, BottomNavigation, BottomNavigationAction, Paper, Container, TextField, Button, Card, CardContent } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

function NewAnalysis() {

  const navigate = useNavigate();
  const [value, setValue] = useState(1); 
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;


    const userMessage = { sender: 'user', text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');

  };

  return (
    <Box sx={{ pb: 7, minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
            Danışan Paneli
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', p: 0 }}>
        
        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {chatHistory.map((msg, index) => (
            <Box
              key={index}
              sx={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'user' ? '#1a237e' : '#f2f2f7',
                color: msg.sender === 'user' ? 'white' : '#000000',
                padding: '14px 18px',
                borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                maxWidth: '75%',
                wordBreak: 'break-word',
                boxShadow: 'none', 
              }}
            >
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box 
          component="form" 
          onSubmit={handleSendMessage} 
          sx={{ 
            p: 2, 
            backgroundColor: '#ffffff', 
            borderTop: '1px solid #e5e5ea',
            display: 'flex', 
            gap: 1,
            alignItems: 'center'
          }}
        >
          <TextField
            fullWidth
            size="medium" 
            placeholder="Nasıl hissediyorsunuz?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ 
              '& .MuiOutlinedInput-root': { 
                borderRadius: '24px', 
                backgroundColor: '#f2f2f7'
              } 
            }}
          />
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              backgroundColor: '#1a237e', 
              '&:hover': { backgroundColor: '#0d134a' },
              borderRadius: '50%', 
              minWidth: '48px',
              height: '48px',
              p: 0
            }}
          >
            <SendIcon />
          </Button>
        </Box>
      </Container>

  
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            if (newValue === 0) navigate('/analyses');
            if (newValue === 1) navigate('/new-analyses');
            if (newValue === 2) navigate('/voice-record');
          }}
          sx={{ '& .Mui-selected': { color: '#1a237e' }, '& .Mui-selected .MuiSvgIcon-root': { color: '#1a237e' } }}
        >
          <BottomNavigationAction label="Geçmiş Analizler" icon={<HistoryIcon />} />
          <BottomNavigationAction label="Yeni Sohbet" icon={<ChatIcon />} />
          <BottomNavigationAction label="Ses Kaydı" icon={<MicIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );

}
export default NewAnalysis;

