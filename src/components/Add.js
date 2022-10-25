import {
  Avatar,
  Button,
  Fab,
  Modal,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25PX)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Button onClick={(e) => setOpen(true)}>Open modal</Button>
      <StyleModal
        open={open}
        onClick={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" borderRadius={5} p={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            heLLO
          </Typography>
          <UserBox>
            <Avatar
              alt="Cindy Baker"
              src="https://placeimg.com/192/194/people"
            />
            <Typography>John Doe</Typography>
          </UserBox>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
