// const config = require('../../config/routes.js')
const tutorialService = require("../services/tutorialService.js")

// Create and Save a new Tutorial
exports.create = (req, res) => {
  tutorialService.create(req, res).then((result) => {
    return res.status(201).json(result);
  })
  .catch((err) => {
    console.info("ERROR: ", err)
    return res.json(err);
  });
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    tutorialService.findAll(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    tutorialService.findOne(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    tutorialService.update(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    tutorialService.delete(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    tutorialService.deleteAll(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
   tutorialService.findAllPublished(req, res)
   .then((result) => {
    return res.status(200).json(result);
  })
  .catch((err) => {
    console.info("ERROR: ", err)
    return res.json(err);
  });
};