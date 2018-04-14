const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.get('/h', (req, res) => {
  res.send({ express: 'Hello World' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
