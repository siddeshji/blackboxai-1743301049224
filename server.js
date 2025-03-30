const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use('/auth', express.static(path.join(__dirname, 'auth')));

// API routes would go here
app.post('/api/login', (req, res) => {
    // In a real app, this would handle actual authentication
    res.json({ success: true, token: 'simulated-token' });
});

app.post('/api/signup', (req, res) => {
    // In a real app, this would handle user registration
    res.json({ success: true, message: 'Account created successfully' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Access the app at http://localhost:${port}/index.html`);
});