const db = require('../models/starWarsModels');

const starWarsController = {};

starWarsController.getCharacters = async (req, res, next) => {
  try {
    // Get results of all documents in Person model
    // Save results into res.locals and move onto next middleware
    const data = await db.Person.find({});

    res.locals.characters = data;
    return next();
  } catch {
    return next({
      log: 'starWarsController.getCharacters ERROR: Person query failure',
      message: { err: 'starWarsController.getCharacters error' },
    });
  }
};

starWarsController.getSpecies = async (req, res, next) => {
  try {
    const data = await db.Species.find({ _id: req.query.id });
    res.locals.species = data[0];
    return next();
  } catch {
    return next({
      log: 'starWarsController.getSpecies',
      message: { err: 'starWarsController.getSpecies' },
    });
  }
};

starWarsController.getHomeworld = async (req, res, next) => {
  try {
    const data = await db.Planet.find({ _id: req.query.id });
    res.locals.planet = data[0];
    return next();
  } catch {
    return next({
      log: 'starWarsController.getHomeworld',
      message: { err: 'starWarsController.getHomeworld' },
    });
  }
};

starWarsController.getFilm = async (req, res, next) => {
  try {
    const data = await db.Film.find({ _id: req.query.id });
    res.locals.film = data[0];
    return next();
  } catch {
    return next({
      log: 'starWarsController.getFilm',
      message: { err: 'starWarsController.getFilm' },
    });
  }
};

starWarsController.addCharacter = async (req, res, next) => {
  try {
    const body = {
      name: req.body.name,
      gender: req.body.gender,
      species: req.body.species,
      species_id: req.body.species_id,
      birth_year: req.body.birth_year,
      eye_color: req.body.eye_color,
      skin_color: req.body.skin_color,
      hair_color: req.body.hair_color,
      mass: req.body.mass,
      height: req.body.height,
      homeworld: req.body.homeworld,
      homeworld_id: req.body.homeworld_id,
      films: req.body.films,
    };
    await db.Person.insertMany(body);
    return next();
  } catch {
    return next({
      log: 'starWarsController.addCharacter',
      message: { err: 'starWarsController.addCharacter' },
    });
  }
};

module.exports = starWarsController;
