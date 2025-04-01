import { Button, Container, Paper, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../../layout/Navbar";
import Topbar from "../../layout/Topbar";
import Filter from "../../assets/images/filter.jpg";
import WashingMachine from "../../assets/images/washingmachine.jpg";
import Fan from "../../assets/images/fan.jpg";
import Ac from "../../assets/images/ac.png";
import Fridge from "../../assets/images/fridge.jpg";
import { useNavigate } from "react-router-dom";

export default function Product() {

    const navigate = useNavigate();


    const products = [
        { id: 1, name: "Aquaguard", image: Filter, description: "Description of filter" },
        { id: 2, name: "Wash machine", image: WashingMachine, description: "Description of machine" },
        { id: 3, name: "Fan", image: Fan, description: "Description of Fan" },
        { id: 4, name: "Fridge", image: Fridge, description: "Description of Fridge" },
        { id: 5, name: "Air conditioner", image: Ac, description: "Description of Ac" },
        { id: 6, name: "Aquaguard", image: Filter, description: "Description of filter" },
        { id: 7, name: "Wash machine", image: WashingMachine, description: "Description of machine" },
        { id: 8, name: "Fan", image: Fan, description: "Description of Fan" },
        { id: 9, name: "Fridge", image: Fridge, description: "Description of Fridge" },
        { id: 10, name: "Air conditioner", image: Ac, description: "Description of Ac" },
    ];

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
                    justifyContent: 'space-between',
                    marginBottom: 3,
                    width: '100%',
                    maxWidth: 1200,
                    boxShadow: 3
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Products
                </Typography>
                <Button
                    startIcon={<AddIcon />}
                    variant="outlined"
                    sx={{
                        backgroundColor: '#004D4D',
                        color: 'white',
                    }}
                    onClick={() => navigate('/addProduct')}
                >
                    Add Product
                </Button>
            </Paper>

            <Container sx={{ maxWidth: '1200px', marginBottom: 4 }}>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                            <Card sx={{ maxWidth: 300, boxShadow: 3 , padding : 1}}>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Product ID: {product.id}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
