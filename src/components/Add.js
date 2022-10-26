import {
  Avatar,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Fab,
  IconButton,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  Article,
  DateRange,
  DateRangeSharp,
  EmojiEmotions,
  Favorite,
  FavoriteBorder,
  Image,
  MoreVert,
  Panorama,
  PersonAdd,
  VideoCameraBack,
  YouTube,
} from "@mui/icons-material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Box, Stack } from "@mui/system";

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
  const commonStyles = {
    bgcolor: "background.paper",
    border: 1,
  };
  return (
    <Box>
      {/* <Tooltip
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
      </Tooltip> */}
      <Card sx={{ margin: 5 }}>
        <Card>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              p: "15px",
            }}
          >
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt="Cindy Baker"
              src="https://placeimg.com/192/194/people"
            />
            <ButtonBase sx={{ borderRadius: "40px" }}>
              <Box
                sx={{
                  // backgroundColor: "#F3F2EF",
                  pr: "340px",
                  py: "20px",
                  borderRadius: "40px",
                  ...commonStyles,
                  borderColor: "grey.500",
                  "&:hover": {
                    background: "#F3F2EF",
                  },
                }}
              >
                <ButtonBase sx={{ pl: "15px" }}>Start a Post</ButtonBase>
              </Box>
              <Box>
                <Panorama />
                <Typography>Photo</Typography>
                <YouTube></YouTube>
                <Typography>Video</Typography>
                <DateRangeIcon />

                <Typography>Audio event</Typography>
                <Article/>
                <Typography>Write atrial</Typography>
              </Box>
            </ButtonBase>
          </Box>
        </Card>
      </Card>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={5}
        >
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
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions />
            <Image />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </Box>
  );
};

export default Add;
