import * as React from "react";
import { Button, styled } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

function App() {
  const MyButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
    },
  });
  return (
    <div>
      <Sidebar />
      <Feed />
      <RightBar />
    </div>
  );
}

export default App;
