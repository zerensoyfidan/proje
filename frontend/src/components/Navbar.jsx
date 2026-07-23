import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import MicIcon from '@mui/icons-material/Mic';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = localStorage.getItem('userRole');

  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/') {
    return null;
  }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(event, newValue) => {
          navigate(newValue);
        }}
        sx={{
          '& .Mui-selected': { color: '#1a237e' },
          '& .Mui-selected .MuiSvgIcon-root': { color: '#1a237e' },
        }}
      >
        <BottomNavigationAction 
          label="Geçmiş Analizler" 
          value="/analyses" 
          icon={<HistoryIcon />} 
        />
       
       {userRole === 'DANISAN' && (
          <BottomNavigationAction 
            label="Yeni Sohbet" 
            value="/new-analyses" 
            icon={<ChatIcon />} 
          />
        )}

          <BottomNavigationAction 
            label="Ses Kaydı" 
            value="/voice-record" 
            icon={<MicIcon />} 
          />
      </BottomNavigation>
    </Paper>
  );
}

export default Navbar;