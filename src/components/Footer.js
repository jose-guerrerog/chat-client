import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useUserStore } from "../store/userStore.ts";

export const Footer = ({ socket }) => {
  const [message, setMessage] = useState("");
  const username = useUserStore(state => state.username)

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username) {
      socket.emit("sendMessage", message);
    }
    setMessage("");
  };

  return (
    <Box
      component="footer"
      sx={{
        height: "80px",
        width: '100%',
        zIndex: 20,
        background: 'inherit',
      }}
    >
      <Divider />
      <Box
        component="form"
        onSubmit={handleSendMessage}
        display="flex"
        alignItems="center"
        width="calc(100% - 48px)"
        height="100%"
        px={3}
      >
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          size="large"
          sx={{ ml: 3 }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
