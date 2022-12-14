import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import {
  Apps,
  ArrowDropDownSharp,
  Campaign,
  Home,
  HomeRounded,
  LinkedIn,
  Mail,
  Notifications,
  NotificationsSharp,
  People,
  SearchSharp,
  Textsms,
  Work,
} from "@mui/icons-material";
import { display } from "@mui/system";
import img1 from "../asset/img/1.jpg";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#EEF3F8",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,

  [theme.breakpoints.up("sm")]: {
    width: "200px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "250px",
  },
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        backgroundColor: "white",
        px: "35px",
      }}
    >
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            <LinkedIn sx={{ width: 46, height: 46, color: "#0A66C2" }} />
          </Typography>
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <Avatar
              sx={{
                width: 36,
                height: 36,
              }}
              src={img1}
            />
          </Box>
          <Search sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SearchSharp sx={{ color: "gray" }} />
            <InputBase placeholder="search..." />
          </Search>
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <Textsms sx={{ color: "gray", width: 28, height: 28 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: { lg: "flex", xs: "none", sm: "block" },
            gap: 4,
            color: "gray",
          }}
        >
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <HomeRounded sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: 12 }}>Home</Typography>
          </Box>
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <People sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: 12 }}>My Network</Typography>
          </Box>
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <Work sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: 12 }}>Jobs</Typography>
          </Box>
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <Textsms sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: 12 }}>Message</Typography>
          </Box>
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <NotificationsSharp sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: 12 }}>Notifications</Typography>
          </Box>
          <Box>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: 28, height: 28 }}
              src={img1}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: 12 }}>Me</Typography>
              <ArrowDropDownSharp />
            </Box>
          </Box>
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <Apps sx={{ width: 28, height: 28 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: 12 }}>Work</Typography>
              <ArrowDropDownSharp />
            </Box>
          </Box>
          <Box sx={{ display: "grid", justifyItems: "center" }}>
            <Campaign sx={{ width: 28, height: 28 }} />
            <Typography sx={{ fontSize: 12 }}>Advertise</Typography>
          </Box>
        </Box>
        {/* <UserBox>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="/static/images/avatar/2.jpg"
          />
          <Typography>John</Typography>
        </UserBox> */}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
