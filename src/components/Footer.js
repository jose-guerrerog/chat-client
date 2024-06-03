import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export const Footer = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    if (message.trim() && username) {
      socket.emit("sendMessage", message);
    }
    setMessage("");
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        height: "80px",
        width: "calc(100% - 240px)",
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
