// const config = require('../../config/routes.js')
const tutorialService = require("../services/tutorialService.js")

// Create and Save a new Tutorial
exports.createTutorial = (req, res) => {
  tutorialService.createTutorial(req, res).then((result) => {
    return res.status(201).json(result);
  })
  .catch((err) => {
    console.info("ERROR: ", err)
    return res.json(err);
  });
  
};

// Create and Save a new Student
exports.createStudent = (req, res) => {
    tutorialService.createStudent(req, res).then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.info("ERROR: ", err)
      return res.json(err);
    });
    
  };

// Retrieve all Tutorials from the database.
exports.findAllTutorial = (req, res) => {
    tutorialService.findAllTutorial(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
  
};

// Find a single Tutorial with an id
exports.findOneTutorial = (req, res) => {
    tutorialService.findOneTutorial(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
  
};

// Find a Student with an id
exports.findStudentById = (req, res) => {
    tutorialService.findStudentById(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
  
};

// Update a Tutorial by the id in the request
exports.updateTutorial = (req, res) => {
    tutorialService.updateTutorial(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Delete a Tutorial with the specified id in the request
exports.deleteTutorial = (req, res) => {
    tutorialService.deleteTutorial(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Delete all Tutorials from the database.
exports.deleteAllTutorial = (req, res) => {
    tutorialService.deleteAllTutorial(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Find all published Tutorials
exports.findAllPublishedTutorial = (req, res) => {
   tutorialService.findAllPublishedTutorial(req, res)
   .then((result) => {
    return res.status(200).json(result);
  })
  .catch((err) => {
    console.info("ERROR: ", err)
    return res.json(err);
  });
};