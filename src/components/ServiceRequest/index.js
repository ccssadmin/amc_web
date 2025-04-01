import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography , Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../../layout/Navbar";
import Topbar from "../../layout/Topbar";
import { useNavigate } from "react-router-dom";

export default function ServiceRequest() {

    const navigate= useNavigate();


    const clientDetails = [
        {
            client: "jeyasurya",
            product: "Product A",
            issue: "Product not working good",
            location: "Aundipatti",
            phone: "+1234567890",
            startDate: "01/01/2023",
            Assignto: "William"
        },
        {
            client: "Simba",
            product: "Product B",
            issue: "Product Quality is not good",
            location: "Aundipatti",
            phone: "+1987654321",
            startDate: "15/02/2023",
            Assignto: "Louis"
        },
        {
            client: "jeyasurya",
            product: "Product A",
            issue: "Product not working good",
            location: "Aundipatti",
            phone: "+1234567890",
            startDate: "01/01/2023",
            Assignto: "William"
        },
        {
            client: "Kavin",
            product: "Product B",
            issue: "Product Quality is not good",
            location: "Aundipatti",
            phone: "+1987654321",
            startDate: "15/02/2023",
            Assignto: "Louis"
        },
        {
            client: "Prabu",
            product: "Product A",
            issue: "Product not working good",
            location: "Aundipatti",
            phone: "+1234567890",
            startDate: "01/01/2023",
            Assignto: "William"
        },
        {
            client: "Surendar",
            product: "Product B",
            issue: "Product Quality is not good",
            location: "Aundipatti",
            phone: "+1987654321",
            startDate: "15/02/2023",
            Assignto: "Louis"
        },
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
                    Service Requests
                </Typography>
                <Box>
                    <Button
                    sx={{
                        marginRight : 2,
                        color:'#004D4D'
                    }}
                    >
                        Assign To
                    </Button>
                    <Button
                    startIcon={<AddIcon />}
                    variant="outlined"
                    sx={{
                        backgroundColor: '#004D4D',
                        color: 'white',                        
                    }}
                    onClick={ () => navigate('/addServiceRequest')}
                >
                    Add Service Request
                </Button>
                </Box>
                
            </Paper>

            <Container sx={{ marginBottom: 3 }}> 
                <TableContainer component={Paper} sx={{ boxShadow: 3, padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#BBBBBB" }}>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Client</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Product</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Issue</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Phone Number</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Location</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Date</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Assign To</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientDetails.map((client, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.client}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.product}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>
                                            {client.issue}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.phone}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.location}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.startDate}</TableCell>
                                    <TableCell align="center" sx={{ padding: '8px' }}>{client.Assignto}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>
        </div>
    );
}
