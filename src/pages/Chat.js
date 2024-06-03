import { Box } from "@mui/material";
import { ChatBody } from '../components/ChatBody';
import { Sidebar } from '../components/Sidebar';
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";

export const Chat = ({socket}) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on("message", data => {
      setMessages([...messages, data]);
    })
  }, [messages])

  return (
      <Box display="flex">
        <Sidebar socket={socket} />
        <Box height="100vh" width='100%' overflow='hidden' sx={{ backgroundColor: '#efe9e0' }}>
          <ChatBody messages={messages} />
          <Footer socket={socket} />
        </Box>
      </Box>
  );
}
