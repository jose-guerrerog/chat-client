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
        width: "350px",
      }}
    >
      <Box
        sx={{
          width: `calc(100% - 32px)`,
          p: 2,
        }}
      >
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography fontWeight={700}>{message.username}</Typography>
          <Typography fontWeight={700}>
            {moment(message.createdAt).format("h:mm a")}
          </Typography>
        </Stack>
        <Typography wrap='noWrap'   style={{ wordWrap: "break-word" }}>{message.text}</Typography>
      </Box>
    </Box>
  );
};
