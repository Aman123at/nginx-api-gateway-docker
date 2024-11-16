const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Auth service is running' });
});
app.get('/dummy', (req, res) => {
    res.json({ message: 'Dummy Auth service is running',headers:req.headers });
});

// Start server
const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Auth service listening on port ${PORT}`);
});
