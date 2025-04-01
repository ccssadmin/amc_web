import { Paper, Typography, TextField, Grid, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

export default function AddClient() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [product, setProduct] = useState('');
  const [subscription, setSubscription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName , lastName ,email ,mobileNo , product, subscription , startDate , endDate
    }

    try {
      const response = await API.post('http://localhost:4000/client' , formData)
      if(response.status === 200){
        console.log('client added Succesfully');
      }
      navigate('/client')

    } catch (error) {
      console.log(error , 'error adding client');
    }
  }



  return (
    <div>
      <Paper
        sx={{
          height: "auto",
          marginTop: 5,
          padding: 2,
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: 3,
          width: "100%",
          maxWidth: 1200,
          boxShadow: 3,
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          New Client
        </Typography>

        </Paper>

        <Grid container spacing={3} sx={{ marginTop: 2 }}>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Product"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <MenuItem value='Ac'>Ac</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Subscription"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={subscription}
              onChange={(e) => setSubscription(e.target.value)}
            >
              <MenuItem value='Plus'>Plus</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Start Date"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ marginBottom: 2 }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="End Date"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ marginBottom: 2 }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} 
          sx={{
            display : 'flex',
            justifyContent: 'flex-end',
            gap: 4
          }}>
            <Button variant="text" 
            sx={{
                color:'#004D4D'
            }}
            onClick={() => navigate('/client')}
            >
              Cancel
            </Button>
            <Button variant="contained"
            sx={{
                backgroundColor:'#004D4D',
                color: 'white'
            }}
            onClick={handleSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
    </div>
  );
}
