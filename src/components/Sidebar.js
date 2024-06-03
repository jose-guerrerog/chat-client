import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

export const Sidebar = ({socket}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    socket.on('roomData', ({ room, users }) => {
      setUsers(users);
    })
  }, [])

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#222222',
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: '#222222',
          color: '#ffffff'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box py={5} px={2}>
      <Typography
        variant="h5"
        mb={2}
      >
        Current Users
      </Typography>
      {
        users.map((user) => <Typography noWrap mt={2}>{user.username}</Typography>)
      }
      </Box>
    </Drawer>
  );
}
