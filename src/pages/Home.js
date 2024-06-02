import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', username);
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

        <TextField />
        <Button onClick={onSubmit}>
          Join
        </Button>
      </Box>
  );
}

export default Home;