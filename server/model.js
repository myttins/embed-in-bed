
const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://kevinli128:grenande@cluster0.sgfobsb.mongodb.net/?retryWrites=true&w=majority';

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  prompt: String,
  url: String,
});

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'testDB',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Image = mongoose.model('image', imageSchema);

module.exports = {
  Image,
};
