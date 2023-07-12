const OPENAI_API_KEY = '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';
const ORG_ID = 'org-t6a30kczq0AI83uRjOOfIrpK';

const path = require('path');
const express = require('express');
const download = require('image-downloader');

const { Configuration, OpenAIApi } = require('openai');

const imageController = require('./imageController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const url1 =
  'https://www.dailypaws.com/thmb/tPXFfGDaeXPytWTKsYQgU1E3LeU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siamese-cat-couch_525025708-2000-e914b62ff65f4df39a7f55b87bf49213.jpg';
const url2 =
  'https://thumbs.dreamstime.com/b/fat-siamese-cat-over-bed-looking-camera-92042824.jpg';
const url3 = 'https://i.redd.it/lpduf65tb82a1.jpg';
const url4 =
  'https://cdn.petcarerx.com/blog/wp-content-uploads-2016-08-1-21.jpg';

const urls = [url1, url2, url3, url4];
/**
 * handle requests for static files
 */
app.use('/banana', express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */

app.post('/api/download', imageController.download, (req, res) => {
  console.log(res.locals.directory);
  return res.status(200).json(res.locals.directory);
});

app.post('/api', async (req, res) => {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createImage({
    prompt: 'A cute baby sea otter',
    n: 1,
    size: '256x256',
  });

  console.log('ai response: ', response.data.data);

  return res.status(200).json(urls);
});

app.use('/', (req, res) => {
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
