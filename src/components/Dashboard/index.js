import React from "react";
import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Topbar from "../../layout/Topbar";
import Navbar from "../../layout/Navbar";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const requestData = {
    totalRequests: 150,
    completedRequests: 120,
    pendingRequests: 20,
    unavailableRequests: 10,
    totalClients: 1200,
    totalTechnician : 46
  };

  const newRequests = [
    { client: "Client 1", product: "Product A", date: "2025-02-20", time: "10:00 AM" },
    { client: "Client 2", product: "Product B", date: "2025-02-20", time: "11:30 AM" },
    { client: "Client 3", product: "Product C", date: "2025-02-19", time: "02:45 PM" },
    { client: "Client 4", product: "Product C", date: "2025-02-19", time: "02:45 PM" },
    { client: "Client 5", product: "Product C", date: "2025-02-19", time: "02:45 PM" },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: "Total Clients",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      <Topbar />
      <Navbar />
      
      <Box p={3} sx={{ marginTop: 20 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight : 600}}>
                Total Requests
              </Typography>
              <Box 
              sx={ {
                display : 'flex' ,
                marginTop : 1
              }}
              >
              <Typography variant="h5" color="#008080">{requestData.totalRequests}</Typography>
              <Typography variant="subtitle2" sx={{ marginTop :1 , marginLeft : 1}}>Requests</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6"  sx={{ fontWeight : 600}}>
                Completed Requests
              </Typography>
              <Box 
              sx={ {
                display : 'flex' ,
                marginTop : 1
              }}
              >
              <Typography variant="h5" color="#00B555">{requestData.completedRequests}</Typography>
              <Typography variant="subtitle2" sx={{ marginTop :1 , marginLeft : 1}}>Requests</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight : 600}}>
                Pending Requests
              </Typography>
              <Box 
              sx={ {
                display : 'flex' ,
                marginTop : 1
              }}
              >
              <Typography variant="h5" color="#E20014">{requestData.pendingRequests}</Typography>
              <Typography variant="subtitle2" sx={{ marginTop :1 , marginLeft : 1}}>Requests</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight : 600}}>
                Unavailable Requests
              </Typography>
              <Box 
              sx={ {
                display : 'flex' ,
                marginTop : 1
              }}
              >
              <Typography variant="h5" color="#FFCE00">{requestData.unavailableRequests}</Typography>
              <Typography variant="subtitle2" sx={{ marginTop :1 , marginLeft : 1}}>Requests</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: 1 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper elevation={3} sx={{ padding: 2, height: 370 }}>
              <Typography variant="h6" color="primary">
                New Requests
              </Typography>
              <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#BBBBBB'}}>
                    <TableRow>
                      <TableCell>Client</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {newRequests.map((request, index) => (
                      <TableRow key={index}>
                        <TableCell>{request.client}</TableCell>
                        <TableCell>{request.product}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>{request.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight : 600}}>
                    Total Clients
                  </Typography>
                  <Box 
                    sx={ {
                      display : 'flex' ,
                      marginTop : 1
                    }}
                    >
                  <Typography variant="h5" color="#008080">{requestData.totalClients}</Typography>
                  <Typography variant="subtitle2" sx={{ marginTop :1 , marginLeft : 1}}>Requests</Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight : 600}}>
                    Total Technician
                  </Typography>
                  <Box 
                    sx={ {
                      display : 'flex' ,
                      marginTop : 1
                    }}
                    >
                  <Typography variant="h5" color="#008080">{requestData.totalTechnician}</Typography>
                  <Typography variant="subtitle2" sx={{ marginTop :1 , marginLeft : 1}}>Requests</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Graph */}
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: 1 }}>
                  <Typography variant="h6" color="primary" sx={{ marginBottom: 2 , marginLeft : 2 }}>
                    Total Clients
                  </Typography>
                  <div style={{ height: '210px', marginLeft : 15 }}> 
                    <Line data={chartData} />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
