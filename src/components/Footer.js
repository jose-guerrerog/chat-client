import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const drawerWidth = 240;

export function Footer() {
  const [message, setMessage] = useState('')

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('send_message', {
        // text: message,
        // id: `${socket.id}${Math.random()}`,
        // socketID: socket.id,
        message,
      });
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
