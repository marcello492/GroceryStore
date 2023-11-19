// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ShopperSignIn from './Components/Sign_Ins/ShopperSignIn';
import ShopperSignUp from './Components/Sign_Ups/ShopperSignUp';
import DriverSignIn from './Components/Sign_Ins/DriverSignIn';
import DriverSignUp from './Components/Sign_Ups/DriverSignUp';
import DriverHomepage from './Components/DriverHomePage';
import CreateTrip from './Components/CreateTrip';
import Trips from './Components/Trips';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shopper-signin" element={<ShopperSignIn />} />
                <Route path="shopper-signup" element={<ShopperSignUp />} />
                <Route path="/driver-signin" element={<DriverSignIn />} />
                <Route path="/driver-signup" element={<DriverSignUp />} />
                <Route path="/driver-homepage" element={<DriverHomepage />} />
                
                <Route path="/create-trip" element={<CreateTrip />} />
                <Route path="/trips" element={<Trips />} />
            </Routes>
        </Router>
    );
}

export default App;
