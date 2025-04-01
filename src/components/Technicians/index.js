import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../../layout/Navbar";
import Topbar from "../../layout/Topbar";
import { useNavigate } from "react-router-dom";

export default function Technician() {

    const navigate = useNavigate();


    const clientDetails = [
        {
            technician: "jeyasurya",
            product: "Product A",
            level: "high",
            mailid: "js@email.com",
            phone: "+1234567890",
            status : "Active"
        },
        {
            technician: "Michael",
            product: "Product B",
            level: "low",
            mailid: "jeya@email.com",
            phone: "+1987654321",
            status : "InActive"
        },
        {
            technician: "jeyasurya",
            product: "Product A",
            level: "high",
            mailid: "js@email.com",
            phone: "+1234567890",
            status : "Active"
        },
        {
            technician: "Mitchell",
            product: "Product B",
            level: "low",
            mailid: "jey@email.com",
            phone: "+1987654321",
            status : "InActive"
        },
        {
            technician: "jeyasurya",
            product: "Product A",
            level: "high",
            mailid: "js@email.com",
            phone: "+1234567890",
            status : "Active"
        },
        {
            technician: "Juliet",
            product: "Product B",
            level: "low",
            mailid: "jeya@email.com",
            phone: "+1987654321",
            status : "InActive"
        },
        {
            technician: "jeyasurya",
            product: "Product A",
            level: "high",
            mailid: "js@email.com",
            phone: "+1234567890",
            status : "Active"
        },
        {
            technician: "Romeo",
            product: "Product B",
            level: "low",
            mailid: "jey@email.com",
            phone: "+1987654321",
            status : "InActive"
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
                    Technician
                </Typography>
                <Button
                    startIcon={<AddIcon />}
                    variant="outlined"
                    sx={{
                        backgroundColor: '#004D4D',
                        color: 'white',                        
                    }}
                    onClick={() => navigate('/addTechnician')}
                >
                    Add Technician
                </Button>
            </Paper>

            <Container sx={{ marginBottom: 3 }}> 
                <TableContainer component={Paper} sx={{ boxShadow: 3, padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#BBBBBB" }}>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Technician</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Product</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Level</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Mailid</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Phone Number</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientDetails.map((client, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.technician}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.product}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>
                                        <Button sx={{
                                            height: 20,
                                            color: 'white',
                                            backgroundColor:
                                                client.level === "high"
                                                    ? '#E20014' 
                                                    : client.level === "low"
                                                    ? '#00B555'
                                                    : 'transparent',
                                        }}>
                                            {client.level}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.mailid}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.phone}</TableCell>
                                    <TableCell align="center" sx={{ 
                                        borderRight: '1px solid #ddd',
                                         padding: '8px',
                                        color : 
                                        client.status === "Active" ? '#00B555'
                                        : client.status === "InActive" ? '#E20014'
                                        : 'black'
                                     }}>{client.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>
        </div>
    );
}
