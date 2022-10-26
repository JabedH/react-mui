import { Box } from "@mui/material";
import React from "react";
import Add from "./Add";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Add />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
