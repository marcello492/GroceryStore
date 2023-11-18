// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ShopperSignIn from './ShopperSignIn';
import DriverSignIn from './Components/DriverSignIn';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/shopper-signin" element={<ShopperSignIn />} />
                <Route path="/driver-signin" element={<DriverSignIn />} />
            </Routes>
        </Router>
    );
}

export default App;
