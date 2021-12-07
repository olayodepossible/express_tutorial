// const config = require('../../config/routes.js')
const tutorialService = require("../../services/tutorialService.js")

// Create and Save a new Tutorial
exports.create = (req, res) => {
  return tutorialService.create(req)
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    return tutorialService.findAll(req);
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    return tutorialService.findOne(req)
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  return tutorialService.update(req)
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
   return tutorialService.delete(req);
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  return tutorialService.deleteAll(req);
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  return tutorialService.findAllPublished(req)
};