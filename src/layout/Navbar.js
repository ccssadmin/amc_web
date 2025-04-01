import React from "react";
import { AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Person, Build, ShoppingCart, Receipt, Settings } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();  

  const isActive = (path) => location.pathname === path; // for active links 

  return (
    <AppBar sx={{ width: '100%', boxSizing: 'border-box', marginTop: 10, backgroundColor: '#004D4D' }}>
      <Toolbar sx={{ display: 'flex', height: 80 }}>
        <List sx={{ display: 'flex', width: '80%', marginLeft: 18 }}>
          
          {/* Dashboard Link */}
          <ListItem 
            button 
            onClick={() => navigate('/dashboard')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/dashboard') ? '1px solid white' : 'none', 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ marginLeft: -3 }} />
          </ListItem>

          {/* Client Link */}
          <ListItem 
            button 
            onClick={() => navigate('/client')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/client') ? '1px solid white': 'none', 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Client" sx={{ marginLeft: -3 }} />
          </ListItem>

          {/* Service Request Link */}
          <ListItem 
            button 
            onClick={() => navigate('/serviceRequest')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/serviceRequest') ? '1px solid white' : 'none', 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Build />
            </ListItemIcon>
            <ListItemText primary="Service Request" sx={{ whiteSpace: 'nowrap', marginLeft: -3 }} />
          </ListItem>

          {/* Technicians Link */}
          <ListItem 
            button 
            onClick={() => navigate('/technician')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/technician') ? '1px solid white' : 'none', 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Build />
            </ListItemIcon>
            <ListItemText primary="Technicians" sx={{ marginLeft: -3 }} />
          </ListItem>

          {/* Product Link */}
          <ListItem 
            button 
            onClick={() => navigate('/product')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/product') ? '1px solid white' : 'none', 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Products" sx={{ marginLeft: -3 }} />
          </ListItem>

          {/* Invoice Link */}
          <ListItem 
            button 
            onClick={() => navigate('/invoice')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/invoice') ? '1px solid white' : 'none',
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Receipt />
            </ListItemIcon>
            <ListItemText primary="Invoice" sx={{ marginLeft: -3 }} />
          </ListItem>

          {/* Settings Link */}
          <ListItem 
            button 
            onClick={() => navigate('/setting')}
            sx={{
              cursor: 'pointer',
              borderBottom: isActive('/setting') ? '1px solid white' : 'none', 
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ marginLeft: -3 }} />
          </ListItem>

        </List>
      </Toolbar>
    </AppBar>
  );
}
