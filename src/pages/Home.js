import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Home = ({socket}) => {

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('room', room);

    socket.emit('join', { username, room }, (error) => {
      if (error) {
        alert(error)
        navigate('/')
      }
    })
  
    navigate('/chat');
  };

  return (
      <Box display="form">
        <Typography>
          Display Name
        </Typography>
        
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Typography> 
          Room
        </Typography>

        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <Button onClick={onSubmit}>
          Join
        </Button>
      </Box>
  );
}

export default Home;