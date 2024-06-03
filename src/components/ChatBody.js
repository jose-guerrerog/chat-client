import Box from "@mui/material/Box";
import { Message } from "./Message";

export const ChatBody = ({ messages }) => {
  return (
    <Box
      component="main"
      overflow="auto"
      sx={{
        p: 3,
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
    </Box>
  );
};
