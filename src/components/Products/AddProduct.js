import { Paper, Typography, TextField, Grid, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

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
          Products
        </Typography>

        </Paper>

        <Grid container spacing={3} sx={{ marginTop: 2 }}>

          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              minRows={2}
              maxRows={4}
              sx={{ marginBottom: 2 }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product ID"
              variant="outlined"
              sx={{ marginBottom: 2 }}
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
            onClick={() => navigate('/product')}
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
