const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// GET /api/users - return all users
router.get('/', (req, res) => {
  const dataPath = path.join(__dirname, '../data/users.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read users data' });
    }
    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse users data' });
    }
  });
});

module.exports = router; 