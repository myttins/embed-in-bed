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

  req.body.prompt
    ? (res.locals.prompt = req.body.prompt)
    : (res.locals.prompt = '-');

  return next();
};

imageController.addToDb = async (req, res, next) => {
  await db.Image.updateOne(
    {
      prompt: res.locals.prompt,
    },
    {
      $push: { url: res.locals.url },
    },
    {
      upsert: true,
    }
  );

  return next();
};

imageController.getHistory = async (req, res, next) => {
  try {
    const data = await db.Image.find({});
    res.locals.data = data;
    return next();
  } catch (err) {
    return next({
      log: 'imageController.getHistory ERROR',
      message: err,
    });
  }
};

module.exports = imageController;
