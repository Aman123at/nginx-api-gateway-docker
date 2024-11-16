const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Cart service is running' });
});

// Start server
const PORT = 8003;
app.listen(PORT, () => {
    console.log(`Cart service listening on port ${PORT}`);
});
