const imageController = {};
const path = require('path');
const download = require('image-downloader');

imageController.download = (req, res, next) => {
  const randStr = Math.floor(Math.random() * 1000000000);

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
      console.log('Image saved to: ', filename);
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
  return next();
};

module.exports = imageController;
