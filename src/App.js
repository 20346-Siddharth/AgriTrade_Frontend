import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Forget from "./Components/Forget";
import Admindash from "./Components/admin/Admindash";
// import { BrowserRouter } from "react-router-dom";
import Profile from "./Components/Profile";


import Farmerdash from "./Components/farmer/Farmerdash";
import Traderdash from "./Components/trader/Traderdash";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />

          <Route path="/admindash" element={<Admindash />}/ >

      
          <Route path="/profile" element={<Profile />} />
       
        
          <Route path="/farmerdash" element={<Farmerdash/>} />
          <Route path="/traderdash" element={<Traderdash/>} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
