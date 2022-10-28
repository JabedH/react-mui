import React from "react";
import {
  CachedRounded,
  ExpandMore,
  Favorite,
  FavoriteBorder,
  InsertCommentRounded,
  MoreVert,
  Public,
  SendRounded,
  Share,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import img1 from "../asset/img/1.jpg";
const Post = () => {
  return (
    <Card sx={{ my: "10px" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 52, height: 52, mr: "-7px" }}
            alt="Cindy Baker"
            src={img1}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={<h4>Jabed H Tusar</h4>}
        subheader={
          <>
            <p>Web Developer</p>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <p>1 hr</p> <Public sx={{ width: "16px", ml: "5px" }} />
            </Box>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The adjective natural is a common word with a lot of meanings. It
          describes anything that comes from nature, but it also means "inborn"
          when you describe your basketball-star friend as a natural athlete.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Paella dish"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: "10px",
          mx: "20px",
        }}
      >
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: "12px" }}
        >
          <ThumbUpOffAlt sx={{ color: "gray", mr: "5px", fontSize: "20px" }} />
          Jabed H Tusar and 25 others
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>5 comments</Typography>
      </Box>
      <Divider textAlign="right" sx={{ my: "5px" }}></Divider>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button size="small" fullWidth sx={{ py: "15px" }}>
          <ThumbUpOffAlt sx={{ color: "gray" }} />
          <Typography sx={{ color: "gray", fontSize: "12px" }}>Like</Typography>
        </Button>
        <Button size="small" fullWidth sx={{ py: "15px" }}>
          <InsertCommentRounded sx={{ color: "gray" }} />
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            Comment
          </Typography>
        </Button>
        <Button size="small" fullWidth sx={{ py: "15px" }}>
          <CachedRounded sx={{ color: "gray" }} />
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            Repost
          </Typography>
        </Button>
        <Button size="small" fullWidth sx={{ py: "15px" }}>
          <SendRounded sx={{ color: "gray" }} />
          <Typography sx={{ color: "gray", fontSize: "12px" }}>Send</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
