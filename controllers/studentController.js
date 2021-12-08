// const config = require('../../config/routes.js')
const studentService = require("../services/studentService.js")



// Create and Save a new Student
exports.createStudent = (req, res) => {
  studentService.createStudent(req, res).then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.info("ERROR: ", err)
      return res.json(err);
    });
    
  };

// Retrieve all Student from the database.
exports.findAllStudent = (req, res) => {
  studentService.findAllStudent(req, res)
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
  studentService.findOneStudent(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
  
};

// Update a Student by the id in the request
exports.updateStudent = (req, res) => {
  studentService.updateStudent(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};

// Delete a Student with the specified id in the request
exports.deleteStudent = (req, res) => {
  studentService.deleteStudent(req, res)
    .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        console.info("ERROR: ", err)
        return res.json(err);
      });
};