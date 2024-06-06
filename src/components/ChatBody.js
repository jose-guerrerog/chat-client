import Box from "@mui/material/Box";
import { Message } from "./Message";
import { useEffect, useRef } from "react";

export const ChatBody = ({ messages }) => {
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      component="main"
      sx={{
        px: 3,
        pt: 1,
        overflowY: 'scroll'
      }}
    >
      {messages.map((message) => {
        const isUserMessage =
          localStorage.getItem("username") === message.username;

        return (
          <Box
            display="flex"
            justifyContent={isUserMessage ? "flex-end" : "flex-start"}
            mb={2}
          >
            <Message message={{ ...message }} isUserMessage={isUserMessage} />
          </Box>
        );
      })}
      <Box
        component='div'
        ref={lastMessageRef}
      />
    </Box>
  );
};
