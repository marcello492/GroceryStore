// AvailableTrips.js
import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Grid, Box, Button } from '@mui/material';
import logo from '../assets/cartpool_logo.png';
import { Link } from 'react-router-dom';

const AvailableTrips = () => {
    const [trips, setTrips] = useState([]); // This would be fetched from your backend or state

    useEffect(() => {
        // Fetch the trip data from your backend or state management system
        // For now, let's use dummy data
        const dummyTrips = [
            { id: 1, date: '2023-01-01', time: '10:00', location: 'Downtown Market', seatsAvailable: 3, additionalInfo: 'No pets, please.' },
            { id: 2, date: '2023-01-02', time: '15:00', location: 'Uptown Mall', seatsAvailable: 2, additionalInfo: 'I have a small car.' },
            // Add more trips as needed
        ];
        setTrips(dummyTrips);
    }, []);

    return (
        <>
        <Box component={Link} to="/" sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
            </Box>
        <Container maxWidth="lg" sx={{ pt: '100px' }}>
            <Typography variant="h4" sx={{ my: 4 }}>
                Available Trips
            </Typography>
            <Grid container spacing={3}>
                {trips.map((trip) => (
                    <Grid item key={trip.id} xs={12} md={6} lg={4}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6">{`Trip to ${trip.location}`}</Typography>
                            <Box sx={{ my: 2 }}>
                                <Typography variant="body1">{`Date: ${trip.date}`}</Typography>
                                <Typography variant="body1">{`Time: ${trip.time}`}</Typography>
                                <Typography variant="body1">{`Seats available: ${trip.seatsAvailable}`}</Typography>
                                <Typography variant="body1">{trip.additionalInfo}</Typography>
                            </Box>
                            <Button variant="contained" color="primary">
                                Join Trip
                            </Button>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </>
    );
};

export default AvailableTrips;
