import { Paper, Typography, TextField, Grid, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddServiceRequest() {

    const navigate = useNavigate();

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
          Service Request
        </Typography>

        </Paper>

        <Grid container spacing={3} sx={{ marginTop: 2 , marginBottom: 2 }}>

            <Grid item xs={12}>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                    Client Details
                </Typography>
            </Grid>

           

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: 1 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: 1 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              sx={{ marginBottom: 1 }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: 500}}>
                Product Details
            </Typography>
          </Grid>

          <Grid item xs={12} >
            <TextField
              fullWidth
              select
              label="Products"
              variant="outlined"
              sx={{ marginBottom: 1 }}
            >
                <MenuItem value="Fridge"> Fridge </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
                label="Write Your Issue..."
                multiline
                minRows={4}  
                maxRows={6}  
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 1 }}
                />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Assign To"
              variant="outlined"
              sx={{ marginBottom: 1 }}
            >
                <MenuItem value="Js">Js</MenuItem>
            </TextField>
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
            onClick={() => navigate('/serviceRequest')}
            >
              Cancel
            </Button>
            <Button variant="contained"
            sx={{
                backgroundColor:'#004D4D',
                color: 'white'
            }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
    </div>
  );
}
