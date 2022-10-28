import { ExpandMore, KeyboardArrowRight, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import img3 from "../asset/img/3.jpg";
import img4 from "../asset/img/4.png";
const RightBar = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  return (
    <Box
      bgcolor=""
      flex={2.5}
      sx={{
        maxWidth: 300,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <Box
          sx={{
            p: "12px",
            width: 300,
            mt: 3,
            border: 0,
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{ typography: "body1", fontSize: "16px" }}
            fontWeight={100}
          >
            Add to your feed
          </Typography>
          <Box my={2} sx={{ display: "flex", gap: 2, my: "15px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://placeimg.com/192/192/people"
            />
            <Box>
              <Typography sx={{ fontSize: "14px", typography: "subtitle2" }}>
                Thompson Studios
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                Company • Information Technology and
              </Typography>
              <Button
                sx={{
                  border: 1,
                  borderRadius: "20px",
                  color: "gray",
                  mt: "5px",
                }}
              >
                <Typography
                  sx={{
                    px: "5px",

                    fontSize: "14px",
                  }}
                >
                  + Follow
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box my={2} sx={{ display: "flex", gap: 2, my: "15px" }}>
            <Avatar alt="Remy Sharp" src={img4} />
            <Box>
              <Typography sx={{ fontSize: "14px", typography: "subtitle2" }}>
                Thomas
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                Software Developer
              </Typography>
              <Button
                sx={{
                  border: 1,
                  borderRadius: "20px",
                  color: "gray",
                  mt: "5px",
                }}
              >
                <Typography
                  sx={{
                    px: "5px",

                    fontSize: "14px",
                  }}
                >
                  + Follow
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box my={2} sx={{ display: "flex", gap: 2, my: "15px" }}>
            <Avatar alt="Remy Sharp" src={img3} />
            <Box>
              <Typography sx={{ fontSize: "14px", typography: "subtitle2" }}>
                john cena
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "gray" }}>
                Front-End web developer
              </Typography>
              <Button
                sx={{
                  border: 1,
                  borderRadius: "20px",
                  color: "gray",
                  mt: "5px",
                }}
              >
                <Typography
                  sx={{
                    px: "5px",

                    fontSize: "14px",
                  }}
                >
                  + Follow
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Button sx={{ color: "gray", fontSize: "14px" }}>
              <typography sx={{}}>View all recommendations </typography>
              <KeyboardArrowRight />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            mt: "20px",
            color: "gray",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>About </Typography>
          <Typography sx={{ fontSize: "12px" }}>Accessibility </Typography>
          <Typography sx={{ fontSize: "12px" }}>Help Center </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",

            mt: "10px",
            color: "gray",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontSize: "12px" }}>Privacy & Terms</Typography>
            <ExpandMore />
          </Box>
          <Typography sx={{ fontSize: "12px" }}>Ad Choices</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            mt: "10px",
            color: "gray",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Advertising</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ fontSize: "12px" }}>Business Services</Typography>
            <ExpandMore />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",

            mt: "10px",
            color: "gray",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>
            Get the LinkedIn app{" "}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>More</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            mt: "10px",
          }}
        >
          <LinkedIn sx={{ color: "#0A66C2" }}></LinkedIn>
          <Typography sx={{ fontSize: "12px" }}>
            LinkedIn Corporation © 2022
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RightBar;
