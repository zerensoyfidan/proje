import React, { useState, useEffect} from 'react';
import {Container,Box,Typography, Button, List, ListItem, ListItemText, Paper, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';

function VoiceMessages() {
  const navigate = useNavigate(); 
  const [userRole, setUserRole] = useState(''); 
  const [isRecording, setIsRecording] = useState(false); 

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const [voiceNotes, setVoiceNotes] = useState([
    { id: 1, date: '01.01.2026', title: 'Ses kaydı', duration: '00:00' },
    { id: 2, date: '01.01.2026', title: 'Ses kaydı2', duration: '00:00' },
  ]);

  const handlePlay = (id) => {
    console.log(`Ses kaydı oynatılıyor, ID: ${id}`);
  };

  const handleToggleRecord = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      <Typography component="h1" variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#1a237e', textAlign: 'center' }}>
        Ses Kayıtları 
      </Typography>
      
      <Paper elevation={2} sx={{ padding: 3, borderRadius: 2, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
          Kayıtlı Ses Notları
        </Typography>
        
        <List>
          {voiceNotes.map((note) => (
            <Paper key={note.id} elevation={1} sx={{ mb: 2, borderRadius: 2, backgroundColor: 'white' }}>
              <ListItem
                secondaryAction={
                  <IconButton 
                    edge="end" 
                    onClick={() => handlePlay(note.id)}
                    sx={{ color: '#1a237e', '&:hover': { color: '#0d134a' } }}
                  >
                    <PlayArrowIcon fontSize="large" />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={note.title}
                  secondary={`${note.date}  Süre: ${note.duration}`}
                  primaryTypographyProps={{ fontWeight: 'bold', color: '#1a237e' }}
                />
              </ListItem>
            </Paper>
          ))}
        </List>
      </Paper>

      {userRole === 'PSIKOLOG' && (
        <Box sx={{ mt: 4 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              padding: 4, 
              borderRadius: 2, 
              border: isRecording ? '2px solid #d32f2f' : '2px solid #1a237e', 
              textAlign: 'center', 
              backgroundColor: isRecording ? '#ffebee' : '#f0f2f5',
              transition: 'all 0.3s ease'
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: isRecording ? '#d32f2f' : '#1a237e' }}>
              {isRecording ? 'Ses Kaydediliyor...' : 'Yeni Ses Kaydı Oluştur'}
            </Typography>
            
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
              {isRecording 
                ? 'Mikrofonunuz aktif. Konuşmanız bittiğinde kaydı durdurun.' 
                : 'Danışanınıza iletmek istediğiniz sesli notu doğrudan mikrofonunuzla kaydedin.'}
            </Typography>

            <Button
              variant="contained"
              startIcon={isRecording ? <StopIcon /> : <MicIcon />}
              onClick={handleToggleRecord}
              sx={{ 
                backgroundColor: isRecording ? '#d32f2f' : '#1a237e', 
                '&:hover': { backgroundColor: isRecording ? '#c62828' : '#0d134a' }, 
                borderRadius: '30px',
                padding: '12px 30px',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              {isRecording ? 'Kaydı Durdur ve Gönder' : 'Kaydı Başlat'}
            </Button>
          </Paper>
        </Box>
      )}

    </Container>
  );
}

export default VoiceMessages;