import {
  AccountBox,
  Group,
  Groups2,
  Home,
  KeyboardArrowDown,
  KeyboardArrowUp,
  LightMode,
  ModeNight,
  Pages,
  Person,
  Settings,
  StoreOutlined,
  TextSnippet,
  TurnedIn,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import Add from "./Add";
import img1 from "../asset/img/1.jpg";
import img2 from "../asset/img/2.jpg";

const Sidebar = ({ mode, setModal }) => {
  return (
    <>
      <Box
        flex={1.7}
        textAlign="center"
        sx={{
          border: 0,
          mt: 3,
          maxWidth: 230,

          display: { xs: "none", sm: "block" },
        }}
      >
        <Box sx={{ position: "fixed" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Box>
              <CardMedia
                component="img"
                height="60px"
                sx={{ width: 230, borderRadius: "10px 10px 0 0" }}
                image={img2}
                alt="Paella dish"
              />
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mt: "-30px",
                  left: { xs: "calc(50% - 25PX)" },
                }}
                alt="Cindy Baker"
                src={img1}
              />
            </Box>
            <Typography sx={{ fontSize: "16px", mt: "20px", mb: "5px" }}>
              Jabed H Tusar <br />
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#9c9898" }}>
              Front-End web developer || MERN <br></br> Stack Web Developer ||
              Full-Stack <br /> Web Developer || ReactJS Developer
            </Typography>
            <Divider component="" sx={{ my: "15px" }} />
            <Box
              sx={{
                px: "10px",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: "#9c9898",
                mb: "15px",
              }}
            >
              <Typography sx={{ textAlign: "left", fontSize: "12px" }}>
                Who's viewed your profile
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>556</Typography>
            </Box>
            <Box
              sx={{
                px: "10px",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: "#9c9898",
                mb: "15px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                Impressions of your posts
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>3563</Typography>
            </Box>
            <Divider component="" sx={{ mt: "10px" }} />
            <Button
              sx={{
                width: "100%",
                textAlign: "right",
                justifyContent: "flex-start",
                textTransform: "none",
                color: "#404040",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TurnedIn />
                <Typography sx={{ fontSize: "12px", mb: "5px" }}>
                  My items
                </Typography>
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              mt: "10px",
              px: "10px",
              py: "15px",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "12px",

                  gap: "10px",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>Recent</Typography>
                <KeyboardArrowUp />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "#9c9898",
                  gap: "10px",
                }}
              >
                <Groups2 />
                <Typography sx={{ fontSize: "12px" }}>
                  International Jobs
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "#9c9898",
                  gap: "10px",
                }}
              >
                <Groups2 />
                <Typography sx={{ fontSize: "12px" }}>
                  Web development
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "#9c9898",
                  gap: "10px",
                }}
              >
                <Groups2 />
                <Typography sx={{ fontSize: "12px" }}>
                  Data Analytics
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>Groups</Typography>
                <KeyboardArrowUp />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "#9c9898",
                  gap: "10px",
                }}
              >
                <Groups2 />
                <Typography sx={{ fontSize: "12px" }}>
                  International Jobs For web
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "#9c9898",
                  gap: "10px",
                }}
              >
                <Groups2 />
                <Typography sx={{ fontSize: "12px" }}>
                  Frontend Developer
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  fontSize: "12px",
                  color: "#9c9898",
                  gap: "10px",
                }}
              >
                <Groups2 />
                <Typography sx={{ fontSize: "12px" }}>
                  Data Analytics
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              backgroundColor: "white",
            }}
            fullWidth
          >
            <Typography sx={{ fontSize: "14px", color: "#9c9898" }}>
              Discover More
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
