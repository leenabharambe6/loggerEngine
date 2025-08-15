const express = require('express');
const routes = require('./routes');
const bodyparser    = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyparser.json({limit: '50mb'}));
app.use(cors({ origin: 'http://localhost:5173' }));

routes.load(app);

app.listen(3000, () => {
  const host = 'localhost';
  const port = 3000;
  console.info('app listening at http://%s:%s', host, port);
});