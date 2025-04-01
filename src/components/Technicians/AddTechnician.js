import { Paper, Typography, TextField, Grid, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddTechnician() {

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
          Technician
        </Typography>

        </Paper>

        <Grid container spacing={3} sx={{ marginTop: 2 }}>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Product"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            >
                <MenuItem value="Fridge">Fridge</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Levels"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            >
                <MenuItem value="High">High</MenuItem>
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
            onClick={() => navigate('/technician')}
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
