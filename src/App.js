import React, { useState } from "react";
import {
  Box,
  Button,
  createTheme,
  Stack,
  styled,
  ThemeProvider,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import Add from "./components/Add";

function App() {
  const [mode, setModal] = useState("light");
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
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"#f3f2ef"} color={"text.primary"}>
        <NavBar />
        <Stack
          sx={{ px: "50px",  }}
          direction="row"
          spacing={1}
          justifyContent="space-between"
        >
          <Sidebar setModal={setModal} mode={mode} />

          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
