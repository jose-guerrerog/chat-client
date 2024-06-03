import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Message } from "./Message";
const drawerWidth = 240;

export function MainContent({socket, messages}) {

  // useEffect(() => {
  //   socket.on('messageResponse', (data) => setMessages(mess=>[...mess, data]));
  // }, [socket]);


  // socket.on('message', (message) => {
  //   console.log('adsasd')
  //   console.log(message)
  // })

  console.log('messages')
  console.log(messages)
  return (
    <Box
      component="main"
      overflow="auto"
    >
      {messages.map(message => (
        <Message
          message={{...message}}
        />
      ))
      }
    </Box>
  );
}
