const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Order service is running' });
});

// Start server
const PORT = 8005;
app.listen(PORT, () => {
    console.log(`Order service listening on port ${PORT}`);
});
