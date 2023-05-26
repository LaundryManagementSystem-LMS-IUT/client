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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/customer/dashboard" element={<DashboardCustomer/>}/>
          <Route path="/manager/dashboard" element={<DashboardManager/>}/>
          <Route path="/customer/history" element={<OrderHistoryCustomer/>}/>
          <Route path="/manager/history" element={<OrderHistoryManager/>}/>
          <Route path="/manager/dashboard" element={<DashboardManager/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
