import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar, Menu, MenuItem, Box } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import User from "../assets/images/userimg1.jpg";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ width: '100%', 
    boxSizing: 'border-box' ,
     height: 130 , 
     backgroundColor: 'white',
     padding: 1
     }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, 
            color: '#008080',
            fontWeight: 800,
            fontSize : 40,
            letterSpacing : 4,
            marginLeft: 5
            }}>
          AMC
        </Typography>

        <IconButton color="inherit" size="large" sx={{ color :'black'}}>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>

        <IconButton color="inherit" onClick={handleMenuClick}
        sx={{
            marginLeft: 5,
            marginRight: 1
        }}
        >
          <Avatar alt="User Name" src={User} />
        </IconButton>
        <Box
        sx={{ 
            flexDirection : 'column',
            display: 'flex',
            marginRight : 5,
        }}
        >
        <Typography variant="body2" sx={{ marginRight: 2 , color : 'black' , fontSize: 20 , fontWeight: 600}}>
          Jeya Surya
        </Typography>
        <Typography variant="body2" sx={{ marginRight: 2 , color : 'gray' ,}}>
         Admin
        </Typography>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
