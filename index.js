/**
 * in react imports look like:
 * 
 * import foo from './baz/bar';
 * 
 * in node.js imports look like below:
 */
const mongoose = require('mongoose');

// localhost is equivalent ot 127.0.0.1
mongoose.connect('mongodb://localhost:27017/badmovies');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database =)...');
});

/**
 * const sch = mongoose.Schema;
 * const movieSchema = new sch({
 *  ...
 * })
 */

// the schema is the equivalent to a table
 const movieSchema = new mongoose.Schema({ // if you don't specify an if mongoDB automatically creates 
   name: String,
   year: Number
 });

 // a model that has the movieSchema, keep javascript varable the same as the name inside the Model method
 const Movie = mongoose.model('Movie', movieSchema);

 // everything below corresponds to MongoDB documentation
 // could have defined all of the below functions inside Server/models.js
 module.exports = {
  // if given a json array 
  create: (movieArray) => {
    return Movie.insertMany(movieArray)
    .exec()
    .catch((err) => console.log(err))
  },
  // if only adding one or updating a document use findOneAndUpdate and modify the parameters
  createOrUpdate: (movie) => {
    return Movie.findOneAndUpdate(
      {name: movie.name}, // if there wasn't a movie in the db with this name, it would create one
      {name: movie.name, year: movie.year}, // the information you want to add to the database
      {upsert: true}
    )
    .exec() // to ensure the database interactions are promises we use .exec() from mongoose
    .catch((err) => console.log(err))
  },
  retrieveAll: () => {
    return Movie.find({}) // an empty object corresponds to no filter parameters, equaivalent SELECT * FROM 
    .exec()
    .catch((err) => console.log(err))
  },
  retrieveByName: (movie) => {
    return Movie.find({ name: movie.name })
    .exec()
    .catch((err) => console.log(err))
  },
  remove: (movie) => { // remove a movie by name
    return Movie.findOneAndDelete({ name: movie.name })
    .exec()
    .catch((err) => console.log(err))
  }
 }

 // to import in other files:
 // const { remove, etc } = require('filepath');