import moment from "moment";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";

export const Message = ({ message, isUserMessage }) => {
  return (
    <Box
      display="flex"
      sx={{
        borderRadius: "12px",
        backgroundColor: isUserMessage ? "#d9fdd3" : "#ffffff",
        width: "300px",
      }}
    >
      <Box
        sx={{
          p: 2,
          width: "100%",
        }}
      >
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography fontWeight={700}>{message.username}</Typography>
          <Typography fontWeight={700}>
            {moment(message.createdAt).format("h:mm a")}
          </Typography>
        </Stack>
        <Typography noWrap>{message.text}</Typography>
      </Box>
    </Box>
  );
};
