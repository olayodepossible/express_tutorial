module.exports = app => {
    const tutorials = require("../controllers/tutorialController.js");
    const students = require("../controllers/studentController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/tutorials/:id", tutorials.createTutorial);
  
    // Retrieve all Tutorials
    router.get("/tutorials", tutorials.findAllTutorial);
  
    // Retrieve all published Tutorials
    router.get("/tutorials/published", tutorials.findAllPublishedTutorial);
  
    // Retrieve a single Tutorial with id
    router.get("/tutorials/:id", tutorials.findOneTutorial);

    // Retrieve a student with id
    router.get("/tutorials/:id", tutorials.findStudentById);
  
    // Update a Tutorial with id
    router.put("/tutorials/:id", tutorials.updateTutorial);
  
    // Delete a Tutorial with id
    router.delete("/tutorials/:id", tutorials.deleteTutorial);
  
    router.delete("/tutorials/", tutorials.deleteAllTutorial);



    /* *** Student route */
     
     router.post("/students", students.createStudent);
   
     // Retrieve all Tutorials
     router.get("/students", students.findAllStudent);

     router.get("/:id", students.findStudentById);

     router.put("/students/:id", students.updateStudent);
   
     // Delete a Tutorial with id
     router.delete("/students/:id", students.deleteStudent);
   
  
    app.use('/api', router);
  };