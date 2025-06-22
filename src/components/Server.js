// server.js
const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const stats = {
  portfoliosUploaded: 120,
  userCount: 50,
  otherStatistic: 30,
};

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
