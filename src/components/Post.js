import React from "react";
import {
  CachedRounded,
  ExpandMore,
  Favorite,
  FavoriteBorder,
  InsertCommentRounded,
  MoreVert,
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
const Post = () => {
  return (
    <Card sx={{ my: "10px" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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

      {/* <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="add to favorites">
            <Checkbox
              icon={<ThumbUpOffAlt />}
              checkedIcon={<ThumbUpOffAlt sx={{ color: "red" }} />}
            />
          </Button>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card> */}
    </Card>
  );
};

export default Post;
