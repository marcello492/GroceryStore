// CreateTrip.js
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper, Grid, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import logo from '../assets/cartpool_logo.png';
import { Link } from 'react-router-dom';

const CreateTrip = () => {
    const [tripData, setTripData] = useState({
        date: '',
        time: '',
        location: '',
        seatsAvailable: '',
        additionalInfo: '',
        isRoundTrip: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTripData({ ...tripData, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        setTripData({ ...tripData, [event.target.name]: event.target.checked });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(tripData); // Process the data
    };

    return (
        <>

        <Box component={Link} to="/" sx={{ position: 'absolute', top: 0, left: 0, padding: '0rem' }}>
                <img src={logo} alt="CartPool Logo" style={{ maxHeight: '200px' }} />
            </Box>
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ mt: 8, py: 4, px: 2 }}>
                <Typography variant="h5" gutterBottom textAlign="center">
                    Create a Grocery Trip
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="date"
                        label="Date"
                        name="date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={tripData.date}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="time"
                        label="Time"
                        name="time"
                        type="time"
                        InputLabelProps={{ shrink: true }}
                        value={tripData.time}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        value={tripData.location}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="seats-label">Seats Available</InputLabel>
                        <Select
                            labelId="seats-label"
                            id="seatsAvailable"
                            name="seatsAvailable"
                            value={tripData.seatsAvailable}
                            label="Seats Available"
                            onChange={handleChange}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            {[1, 2, 3, 4, 5].map((seat) => (
                                <MenuItem key={seat} value={seat}>{seat}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="additionalInfo"
                        label="Additional Information"
                        name="additionalInfo"
                        multiline
                        rows={4}
                        value={tripData.additionalInfo}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox 
                                checked={tripData.isRoundTrip} 
                                onChange={handleCheckboxChange} 
                                name="isRoundTrip" 
                            />
                        }
                        label="Round Trip"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Create Trip
                    </Button>
                </Box>
            </Paper>
        </Container>
        </>
    );
};

export default CreateTrip;
