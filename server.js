const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Handle form submission
app.post('server.js', (req, res) => {
    const { name, email, date } = req.body;
    
    // Data to record
    const formData = `Name: ${name}, Email: ${email}, Pickup Date: ${date}\n`;
    
    // Append data to file
    fs.appendFile('appointments.txt', formData, (err) => {
        if (err) {
            console.error('Error recording data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Data recorded successfully');
            res.send('Appointment recorded!');  // or redirect to a success page
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
