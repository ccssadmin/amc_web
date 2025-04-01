import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../../layout/Navbar";
import Topbar from "../../layout/Topbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api";

export default function Client() {

    const [clientDetails, setClientDetails] = useState([]);

    const navigate = useNavigate();

    useEffect( ( ) => {
        loadClientDetails();
    } , [ ]);

    const loadClientDetails = async ( req, res ) => {
        try {
            const response = await API.get('http://localhost:4000/client');
            setClientDetails(response.data.data);
        } catch (error) {
            console.log('error fetching data', error)
        }
    }


    // const clientDetails = [
    //     {
    //         client: "jeyasurya",
    //         product: "Product A",
    //         subscription: "Premium",
    //         mailid: "js@email.com",
    //         phone: "+1234567890",
    //         startDate: "01/01/2023",
    //         endDate: "01/01/2024"
    //     },
    //     {
    //         client: "Charlie",
    //         product: "Product B",
    //         subscription: "Standard",
    //         mailid: "jeya@email.com",
    //         phone: "+1987654321",
    //         startDate: "15/02/2023",
    //         endDate: "15/02/2024"
    //     },
    //     {
    //         client: "Michael Johnson",
    //         product: "Product C",
    //         subscription: "Basic",
    //         mailid: "michael@email.com",
    //         phone: "+1122334455",
    //         startDate: "20/03/2023",
    //         endDate: "20/03/2024"
    //     },
    //     {
    //         client: "jeyasurya",
    //         product: "Product A",
    //         subscription: "Premium",
    //         mailid: "js@email.com",
    //         phone: "+1234567890",
    //         startDate: "01/01/2023",
    //         endDate: "01/01/2024"
    //     },
    //     {
    //         client: "Jas",
    //         product: "Product B",
    //         subscription: "Standard",
    //         mailid: "jeya@email.com",
    //         phone: "+1987654321",
    //         startDate: "15/02/2023",
    //         endDate: "15/02/2024"
    //     },
    //     {
    //         client: "Michael Johnson",
    //         product: "Product C",
    //         subscription: "Basic",
    //         mailid: "michael@email.com",
    //         phone: "+1122334455",
    //         startDate: "20/03/2023",
    //         endDate: "20/03/2024"
    //     }
    // ];

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
                    Client
                </Typography>
                <Button
                    startIcon={<AddIcon />}
                    variant="outlined"
                    sx={{ 
                        backgroundColor: '#004D4D',
                        color: 'white',                        
                    }}
                    onClick={() => navigate('/addClient')}
                >
                    Add Client
                </Button>
            </Paper>

            <Container sx={{ marginBottom: 3 }}> 
                <TableContainer component={Paper} sx={{ boxShadow: 3, padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#BBBBBB" }}>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Client</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Product</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Subscription</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Mailid</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Phone Number</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Start Date</TableCell>
                                <TableCell align="center" sx={{ padding: '8px' }}>End Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientDetails.map((client, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.firstname + client.lastname}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.product}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>
                                        <Button sx={{
                                            color: 'black',
                                            backgroundColor:
                                                client.subscription === "Premium"
                                                    ? '#FFCE00'
                                                    : 'transparent',
                                        }}>
                                            {client.subscription}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.email}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.phonemumber}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.startdate}</TableCell>
                                    <TableCell align="center" sx={{ padding: '8px' }}>{client.enddate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>
        </div>
    );
}
