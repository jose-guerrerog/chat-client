import Box from "@mui/material/Box";
import { Message } from "./Message";
import { useEffect, useRef } from "react";
import { useUserStore } from "../store/userStore.ts";

export const ChatBody = ({ messages }) => {
  const lastMessageRef = useRef(null);
  const username = useUserStore(state => state.username)

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
      {messages.map((message, index) => {
        const isUserMessage = message.username === username;

        return (
          <Box
            display="flex"
            justifyContent={isUserMessage ? "flex-end" : "flex-start"}
            mb={2}
            key={`message-${index}`}
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
