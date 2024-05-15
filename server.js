const express = require('express');

const app = express();
const PORT = 3000;

// Route to test application
app.get('/test', async (req, res) => {
    res.status(201).json({ message: 'Application is running' });
});

// Route to test application
app.get('/test2', async (req, res) => {
    res.status(201).json({ message: 'Application is running 2' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
