const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const url1 =
//   'https://www.dailypaws.com/thmb/tPXFfGDaeXPytWTKsYQgU1E3LeU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siamese-cat-couch_525025708-2000-e914b62ff65f4df39a7f55b87bf49213.jpg';
// const url2 =
//   'https://thumbs.dreamstime.com/b/fat-siamese-cat-over-bed-looking-camera-92042824.jpg';
// const url3 = 'https://i.redd.it/lpduf65tb82a1.jpg';
// const url4 =
//   'https://cdn.petcarerx.com/blog/wp-content-uploads-2016-08-1-21.jpg';

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */
app.use('/api', (req, res) => {
  console.log(1);
  return res.status(200).json();
});

app.use('/', (req, res) => {
  console.log(2);
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});



// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// express global error handler
app.use((err, req, res, _next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message); // error message might be wrong
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
