import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './index.css';
import Login from './components/login-signup/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
