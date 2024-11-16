const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Analytics service is running' });
});

// Start server
const PORT = 8006;
app.listen(PORT, () => {
    console.log(`Analytics service listening on port ${PORT}`);
});
