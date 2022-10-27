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
  Chip,
  Divider,
  Fab,
  IconButton,
  ListItem,
  ListItemText,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  ArrowDropDown,
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
      <Card sx={{ boxShadow: 0, borderRadius: "10px" }}>
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
              sx={{ width: 45, height: 45 }}
              alt="Cindy Baker"
              src="https://placeimg.com/192/194/people"
            />
            <ButtonBase sx={{ borderRadius: "40px" }}>
              <Box
                onClick={(e) => setOpen(true)}
                sx={{
                  
                  pr: "340px",
                  py: "15px",
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
            </ButtonBase>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
              p: "15px",
              mx: "15px",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Panorama sx={{ color: "#378FE9" }} />
              <Typography>Photo</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <YouTube sx={{ color: "#5F9B41" }}></YouTube>
              <Typography>Video</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <DateRangeIcon sx={{ color: "#C37D16" }} />
              <Typography>Audio event</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Article sx={{ color: "#E16745" }} />
              <Typography>Write atrial</Typography>
            </Box>
          </Box>
        </Card>
      </Card>
      <Divider textAlign="right" sx={{ my: "5px" }}>
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: "15px" }}
        >
          <Box sx={{ fontSize: "12px" }}>Sort by: </Box> Top
          <ArrowDropDown />
        </Typography>
      </Divider>

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
          mt={-5}
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
