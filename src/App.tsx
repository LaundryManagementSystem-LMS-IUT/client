import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/login-signup/login';
import SignUp from './components/login-signup/signup';
import DashboardCustomer from './components/laundry-customer/dashboard';
import DashboardManager from './components/laundry-manager/dashboard';
import OrderHistoryCustomer from './components/laundry-customer/order-history';
import OrderHistoryManager from './components/laundry-manager/order-history';
import LaundryRegistration from './components/login-signup/laundry-register';
import Laundry from './components/laundry-customer/view-laundry/view-all-laundry';
import LaundryDetails from './components/laundry-customer/laundry-details/laundry-details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/manager/login" element={<LaundryRegistration/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/customer/dashboard" element={<DashboardCustomer/>}/>
          <Route path="/manager/dashboard" element={<DashboardManager/>}/>
          <Route path="/customer/history" element={<OrderHistoryCustomer/>}/>
          <Route path="/customer/laundries" element={<Laundry/>}/>
          <Route path="/customer/laundryDetails/:id" element={<LaundryDetails/>}/>
          <Route path="/manager/history" element={<OrderHistoryManager/>}/>
          <Route path="/manager/dashboard" element={<DashboardManager/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
