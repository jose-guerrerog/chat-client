import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../schema";

export const Home = ({ socket }) => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const {
      username,
      room
    } = data;
    localStorage.setItem("username", username);
    localStorage.setItem("room", room);

    socket.emit("join", { username, room }, (error) => {
      if (error) {
        alert(error);
        navigate("/");
      }
    });
    reset();
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
        onSubmit={handleSubmit(onSubmit)}
        backgroundColor="#f0f0f2"
        p={3}
        minWidth={300}
      >
        <Typography variant="h4">Join</Typography>

        <TextField
          id="username"
          label="Username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
          fullWidth
          required
          sx={{ mt: 4 }}
        />
        <TextField
          id="room"
          label="Room"
          {...register("room")}
          error={!!errors.room}
          helperText={errors.room?.message}
          fullWidth
          required
          sx={{ mt: 3 }}
        />
        <Button
          type="submit"
          disabled={!isValid}
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3 }}
        >
          Join
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
