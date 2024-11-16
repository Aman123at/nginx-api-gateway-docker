const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Payment service is running' });
});

// Start server
const PORT = 8004;
app.listen(PORT, () => {
    console.log(`Payment service listening on port ${PORT}`);
});
