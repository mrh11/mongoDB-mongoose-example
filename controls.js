const { create, createOrUpdate, retrieveAll, retrieveByName, remove } = require('../Database/index.js');

module.exports = {
  removeMovie: (req, res) => {
    remove(req.body)
    .then(() => {
      res.send(res.body)
    })
    .catch((err) => {console.log(err)})
  }
}
