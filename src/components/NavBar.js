import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  margin: 10,
});

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          nav bar
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
