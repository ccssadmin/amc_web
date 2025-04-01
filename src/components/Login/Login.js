import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import Cookies from 'js-cookie';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  

  const handleLogin = async () => {
  

  //   try {
  //     const response = await API.post("http://localhost:4000/auth/login", {
  //       email,
  //       password
  //     });

  //     Cookies.set('token', response.data.token);

  //     navigate('/dashboard'); 
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'An error occurred. Please try again.');
  //   }
  // };
  
  navigate('/dashboard') ;


  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container
        sx={{
          width: '500px',  
          height : '380px',  
          padding: 3,        
          backgroundColor: 'white',
          borderRadius: 5,
          boxShadow: '0px 4px 15px 2px rgba(0, 77, 77, 0.6)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom
          sx={{
            color:'#008080',
            fontWeight: 600,
            fontSize : 35,
            letterSpacing : 4
          }}
          >
            AMC
          </Typography>
          
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            onClick={handleLogin}
            sx={{ 
                marginTop: 2 , 
                width : 150 , 
                marginBottom: 2,
                backgroundColor:'#004D4D',
                color:'white'
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
