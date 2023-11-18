// DriverHomepage.js
import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/cartpool_logo.png';
import { Link } from 'react-router-dom';

const DriverHomepage = () => {
    const [futureTrips, setFutureTrips] = useState([]);
    const [pastTrips, setPastTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch trips from the backend or state management
        // For now, using dummy data
        const dummyFutureTrips = [
            // ... future trips data
        ];
        const dummyPastTrips = [
            // ... past trips data
        ];

        setFutureTrips(dummyFutureTrips);
        setPastTrips(dummyPastTrips);
    }, []);

    const handleCreateTrip = () => {
        navigate('/create-trip'); // Replace with your path to the trip creation page
    };

    const handleTrips = () => {
        navigate('/trips'); // Replace with your path to the trip creation page
    };

    return (
        <>
        <Box component={Link} to="/" sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
            </Box>

        <Container maxWidth="lg" sx={{ pt: '100px' }}>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4">My Trips</Typography>
                <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleCreateTrip}>
                    Create New Trip
                </Button>

                <Button variant="contained" color="secondary" sx={{ mb: 2 }} onClick={handleTrips}>
                    View All Trips
                </Button>

                <Typography variant="h5" sx={{ mt: 4 }}>Future Trips</Typography>
                <Grid container spacing={3}>
                    {futureTrips.map((trip) => (
                        <Grid item key={trip.id} xs={12} md={6}>
                            {/* Trip Card Component */}
                        </Grid>
                    ))}
                </Grid>

                <Typography variant="h5" sx={{ mt: 4 }}>Past Trips</Typography>
                <Grid container spacing={3}>
                    {pastTrips.map((trip) => (
                        <Grid item key={trip.id} xs={12} md={6}>
                            {/* Trip Card Component */}
                        </Grid>
                    ))}
                </Grid>
            </Box>
            
        </Container>
        </>
    );
};

export default DriverHomepage;
