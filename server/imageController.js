const imageController = {};
const path = require('path');
const download = require('image-downloader');
const db = require('./model');


imageController.download = (req, res, next) => {
  const randStr = Math.floor(Math.random() * 10000000);

  const options = {
    url: req.body.url,
    dest: path.resolve(
      __dirname,
      '../client/supersecretdata/' + randStr + '.jpg'
    ),
  };

  download
    .image(options)
    .then((filename) => {
      console.log('Image saved to:', filename.filename);
    })
    .catch((err) =>
      next({
        log: 'imageController.download',
        message: { err: `imageController.download ERROR: ${err}` },
      })
    );

  res.locals.directory =
    "<img src='http://localhost:3000/banana/supersecretdata/" +
    randStr +
    ".jpg'></img>";

  res.locals.url =
    'http://localhost:3000/banana/supersecretdata/' + randStr + '.jpg';
  res.locals.prompt = req.body.prompt;

  return next();
};

imageController.addToDb = async (req, res, next) => {
  const body = {
    prompt: res.locals.prompt,
    url: res.locals.url,
  };

  await db.Image.insertMany(body);

  return next();
};

module.exports = imageController;
