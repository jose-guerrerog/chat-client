import { Box, Drawer } from "@mui/material";
import { MainContent } from '../components/MainContent';
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
        <Box height="100vh" overflow={"none"}>
          <MainContent socket={socket} messages={messages} />
          <Footer socket={socket} />
        </Box>
      </Box>
  );
}
