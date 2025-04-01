import { Button, Container, Paper, Typography, Grid, Card, CardContent, Avatar, Box } from "@mui/material";
import Navbar from "../../layout/Navbar";
import Topbar from "../../layout/Topbar";
import LogoutIcon from '@mui/icons-material/Logout';
import User from "../../assets/images/userimg.jpg";
import { useNavigate } from "react-router-dom";


export default function Setting() {

    const navigate = useNavigate();
    return (
        <div>
            <Topbar />
            <Navbar />

            <Paper
                sx={{
                    height: 40,
                    marginTop: 24,
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: 3, 
                    width: '100%',
                    maxWidth: 1200, 
                    boxShadow: 3
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Settings
                </Typography>
            </Paper>

            {/* Cards Section */}
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="center">
                    {['Jeyasurya', 'Jack', 'Mark', 'Antony'].map((user, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Box display="flex" justifyContent="center" mb={2}>
                                        <Avatar src={User} sx={{ width: 56, height: 56 }}>A</Avatar>
                                    </Box>
                                    <Typography variant="h6" align="center">{user}</Typography>
                                    <Typography variant="body2" color="textSecondary" align="center">Username: {user.toLowerCase()}</Typography>
                                    <Typography variant="body2" color="textSecondary" align="center">Role: Admin</Typography>
                                    <Box display="flex" justifyContent="center" mt={2}>
                                        <Button 
                                        variant="contained" 
                                        color="error"
                                        startIcon={ <LogoutIcon />}
                                        onClick={() => navigate('/')}
                                        >
                                            Logout
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
