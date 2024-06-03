import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export function Footer({socket}) {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username')
    if (message.trim() && username) {
      socket.emit('sendMessage', message)
    }
    setMessage('');
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        height: "80px",
        width: "100%",
      }}
    >
      <Divider />
      <Stack flexDirection="row" alignItems="center" height="100%">
        <TextField
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </Stack>
    </Box>
  );
}
