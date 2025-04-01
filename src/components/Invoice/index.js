import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Navbar from "../../layout/Navbar";
import Topbar from "../../layout/Topbar";

export default function Invoice() {
    const clientDetails = [
        {
            client: "jeyasurya",
            product: "Product A",
            status: "Completed",
            technician: "js@email.com",
            price: "890",
            invoice: "View >>",
        },
        {
            client: "Charlie",
            product: "Product B",
            status: "Pending",
            technician: "js@email.com",
            price: "7890",
            invoice: "View >>",
        },
        {
            client: "jeyasurya",
            product: "Product A",
            status: "Completed",
            technician: "js@email.com",
            price: "7890",
            invoice: "View >>",
        },
        {
            client: "Charlie",
            product: "Product B",
            status: "Pending",
            technician: "js@email.com",
            price: "4520",
            invoice: "View >>",
        },
        {
            client: "jeyasurya",
            product: "Product A",
            status: "Completed",
            technician: "js@email.com",
            price: "890",
            invoice: "View >>",
        },
        {
            client: "Charlie",
            product: "Product B",
            status: "Pending",
            technician: "js@email.com",
            price: "752",
            invoice: "View >>",
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
                    justifyContent: 'flex-start',
                    marginBottom: 3, 
                    width: '100%',
                    maxWidth: 1200, 
                    boxShadow: 3
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Invoice
                </Typography>
            </Paper>

            <Container sx={{ marginBottom: 3 }}> 
                <TableContainer component={Paper} sx={{ boxShadow: 3, padding: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#BBBBBB" }}>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Client</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Product</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Request Status</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Technician</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Price</TableCell>
                                <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>Invoice</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientDetails.map((client, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.client}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.product}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px',
                                         color:
                                             client.status === "Completed"
                                                 ? '#00B555'
                                                 : client.status === "Pending" 
                                                 ? '#E20014'
                                                 : 'transparent'

                                     }}>
                                            {client.status}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.technician}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.price}</TableCell>
                                    <TableCell align="center" sx={{ borderRight: '1px solid #ddd', padding: '8px' }}>{client.invoice}</TableCell>
                                    <TableCell align="center" sx={{ padding: '8px' }}>{client.endDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>
        </div>
    );
}
