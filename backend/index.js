const express = require('express');
const usersRouter = require('./routes/users');


const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// API routes
app.use('/api/users', usersRouter);

// Root route
app.get('/', (req, res) => {
  res.send('ERP Revlient Mock Backend is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 