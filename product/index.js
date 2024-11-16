const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Product service is running' });
});

// Start server
const PORT = 8002;
app.listen(PORT, () => {
    console.log(`Product service listening on port ${PORT}`);
});
