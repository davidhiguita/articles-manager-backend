const express = require('express');
const app = express();

const PORT = process.env.PORT || 5437;

app.get('/', (req, res) => {
  res.json({ message: 'Index ready' });
})

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
