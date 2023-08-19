require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ORG_ID = process.env.ORG_ID;

const path = require('path');
const express = require('express');

const { Configuration, OpenAIApi } = require('openai');

const imageController = require('./imageController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const url1 = 'https://i.ibb.co/30rYCJf/54123640.png';
const url2 = 'https://i.ibb.co/m4JNjyS/113163695.png';
const url3 = 'https://i.ibb.co/pQNLBMY/604877894.png';
const url4 = 'https://i.ibb.co/rd5YNJt/944424545.png';

const urls = [url1, url2, url3, url4];

app.use('/static', express.static(path.resolve(__dirname, '../client/static')));

app.post('/api', async (req, res) => {
  // const configuration = new Configuration({
  //   apiKey: OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);

  // const response = await openai.createImage({
  //   prompt: req.body.prompt,
  //   n: 4,
  //   size: '256x256',
  // });
  // response.data.data.forEach((el) => {
  //   urls.unshift(el.url);
  // });

  return res.status(200).json(urls.slice(0, 4));
});

app.post(
  '/api/download',
  imageController.download,
  imageController.addToDb,
  (req, res) => {
    return res.status(200).json(res.locals.directory);
  }
);

app.get('/api/history', imageController.getHistory, (req, res) => {
  return res.status(200).json(res.locals.data);
});

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/index.html'));
});

// app.use('/', (req, res) => {
//   return res.sendFile(path.join(__dirname, '../client/index.html'));
// });

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
