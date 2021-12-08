module.exports = app => {
    const tutorials = require("../controllers/tutorialController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.createTutorial);

    // Create a new Student
    router.post("/student/:id", tutorials.createStudent);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAllTutorial);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublishedTutorial);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOneTutorial);

    // Retrieve a student with id
    router.get("/:id", tutorials.findStudentById);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.updateTutorial);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.deleteTutorial);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAllTutorial);
  
    app.use('/api/tutorials', router);
  };