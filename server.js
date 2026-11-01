const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Route 1: Home page
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Node.js and Express Server!');
});

// Route 2: About page
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Sai Santhosh Kilaparthi',
        registrationNumber: "252U1R5072",
        section: "106 AIDE-2A"
    });
});

// Route 3: Current date and time
// GET /time - Current date and time
app.get("/time", (request, response) => {
    response.status(200).json({
        currentDateTime: new Date().toString()
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
