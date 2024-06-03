import moment from "moment";
import Box from "@mui/material/Box";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

export function Message({message}) {

  return (
    <Box
      display='flex'
      sx={{
        borderRadius: '20px'
      }}
    >
      <Typography fontWeight={700}>
        {message.username}
        {moment(message.createdAt).format('h:mm a')}
      </Typography>
      <Typography>
        {message.text}
      </Typography>
    </Box>
  );
}
