import { Box, Drawer } from "@mui/material";
import { MainContent } from '../components/MainContent';
import { Sidebar } from '../components/Sidebar';
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

export const Chat = () => {
  // function sendMessage() {
  //   console.log("Button clicked");
  //   socket.emit("send_message", { message: "Hello from client" });
  // }
  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);


  return (
      <Box display="flex">
        <Sidebar />
        <Box height="100vh" overflow={"none"}>
          <MainContent />
          <Footer />
        </Box>
      </Box>
  );
}
