// Homepage.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Navbar from './Navbar';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Box my={4}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to CartPool
                    </Typography>
                    <Typography variant="body1">
                        Join a ride to your nearest grocery store, save time, and reduce your carbon footprint.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Homepage;
