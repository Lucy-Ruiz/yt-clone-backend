// General Imports
import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import keys from './API_Key.json'
import SearchBar from "./components/SearchBar/SearchBar";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoDisplay from "./pages/VideoDisplay/VideoDisplay"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

    const[search, setSearch] = useState('');

    useEffect(() => {
        console.log(keys.googleAPIKey);
        // getBitcoinData();
    }, [])




  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:selectedVideo/:user" element={<VideoDisplay />}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
