// if defining CRUD operations here
// const { Movie } = '../Database/index.js';

// const mongoose = require('mongoose');

// module.exports = {
//   // if given a json array 
//   create: (movieArray) => {
//     return Movie.insertMany(movieArray)
//     .exec()
//     .catch((err) => console.log(err))
//   },
//   // if only adding one or updating a document use findOneAndUpdate and modify the parameters
//   createOrUpdate: (movie) => {
//     return Movie.findOneAndUpdate(
//       {name: movie.name}, // if there wasn't a movie in the db with this name, it would create one
//       {name: movie.name, year: movie.year}, // the information you want to add to the database
//       {upsert: true}
//     )
//     .exec() // to ensure the database interactions are promises we use .exec() from mongoose
//     .catch((err) => console.log(err))
//   },
//   retrieveAll: () => {
//     return Movie.find({}) // an empty object corresponds to no filter parameters, equaivalent SELECT * FROM 
//     .exec()
//     .catch((err) => console.log(err))
//   },
//   retrieveByName: (movie) => {
//     return Movie.find({ name: movie.name })
//     .exec()
//     .catch((err) => console.log(err))
//   },
//   remove: (movie) => { // remove a movie by name
//     return Movie.findOneAndDelete({ name: movie.name })
//     .exec()
//     .catch((err) => console.log(err))
//   }
//  }