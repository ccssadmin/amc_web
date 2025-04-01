import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/index";
import Client from "./components/Client";
import ServiceRequest from "./components/ServiceRequest";
import Technician from "./components/Technicians";
import Invoice from "./components/Invoice";
import Setting from "./components/Settings";
import Product from "./components/Products";
import AddClient from "./components/Client/AddClient";
import AddServiceRequest from "./components/ServiceRequest/AddServiceRequest";
import AddTechnician from "./components/Technicians/AddTechnician";
import AddProduct from "./components/Products/AddProduct";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/client" element={ <Client />} />
          <Route path="/addClient" element={ <AddClient />} />
          <Route path="/serviceRequest" element={ <ServiceRequest />} />
          <Route path="/addServiceRequest" element={ <AddServiceRequest />} />
          <Route path="/technician" element={ <Technician /> } />
          <Route path="/addTechnician" element={ <AddTechnician />} />
          <Route path="/product" element={ <Product />} />
          <Route path="/addProduct" element={ <AddProduct />} />
          <Route path="/invoice" element={ <Invoice />} />
          <Route path="/setting" element={ <Setting />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
