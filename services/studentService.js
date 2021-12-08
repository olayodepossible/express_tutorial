const db = require("../models");
const Student = db.students;


  // Create a Student
 exports.createStudent = async(req, res)  => {
   
    const student = req.body;
   
    try {
        const data = await Student.create({
            name: student.name,
            age: student.age,
            level: student.level
        });

        console.log(">> Student Created : " + JSON.stringify(data));
        return data;
    } catch (err) {
        return res.status(500).json({
            message: err.message || "Some error occurred while creating the Tutorial.",
            error: err
        });
    }
}
exports.findOneStudent = async(req, res) => {
    const id = req.params.id;
    try {
        const data = await Student.findByPk(id, { include: ["tutorial"] });
        if (data) {
            return res.send(data);
        } else {
            return res.status(404).send({
                message: `Cannot find Student with id=${id}.`
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Error retrieving Student with id=" + id,
            error: err
        });

    }


}

exports.findAllStudent = async (req, res) =>{
    try {
        const data = await Student.findAll()
       return  res.send(data);
      
    } catch (err) {
        return  res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving tutorials."
            });
        
    }
    
};

exports.updateStudent = async(req, res) => {
    const id = req.params.id;

    try {
       const num = await Student.update(req.body, {
            where: { id: id }
          })
            
              if (num == 1) {
               return  res.send({
                  message: "Student was updated successfully."
                });
              } else {
               return  res.send({
                  message: `Cannot update Student  with id=${id}. Maybe Student  was not found or req.body is empty!`
                });
              }
    } catch (err) {
        return  res.status(500).json({
            message: "Error updating Student  with id=" + id,
            error: err
          });
        
    }
  
   
};


exports.deleteStudent = async (req, res) => {
    const id = req.params.id;

    try {
       const num = await Student.destroy({
            where: { id: id }
          })
           
        console.info("Value return from delete: ", num)
        if (num == 1) {
            return res.send({
            message: "Student was deleted successfully!"
        });
        } else {
        return res.send({
            message: `Cannot delete Student  with id=${id}. Maybe Student  was not found!`
        });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Could not delete Student with id=" + id, 
            error : err
          });
    }
  
    
};




