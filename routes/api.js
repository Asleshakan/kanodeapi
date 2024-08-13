const express = require('express');
const router = express.Router();

// Example API endpoint
router.get('/data', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;
