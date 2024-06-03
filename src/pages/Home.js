import { Box, Button, Drawer, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("room", room);

    socket.emit("join", { username, room }, (error) => {
      if (error) {
        alert(error);
        navigate("/");
      }
    });

    navigate("/chat");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor="#222222"
    >
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        onSubmit={onSubmit}
        backgroundColor="#f0f0f2"
        p={3}
        minWidth={300}
      >
        <Typography variant="h4">Join</Typography>
        <Typography sx={{
          mt: 3, mb: 1
        }}>Display Name</Typography>

        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Typography sx={{ mt: 2, mb: 1}}>Room</Typography>

        <TextField value={room} onChange={(e) => setRoom(e.target.value)} />
        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3}}>
          Join
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
