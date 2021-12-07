const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

module.exports.create = async(req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).json({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Tutorial in the database
    return await Tutorial.create(tutorial)
      /* .then(data => {
        console.info("Tutorial created")
       return  res.send(data);
      })
      .catch(err => {
       return  res.status(500).json({
          message: err.message || "Some error occurred while creating the Tutorial."
        });
    }); */
};

exports.findAll = async(req, res) => {
    try {
        const title = req.query.title;
        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    const data = await Tutorial.findAll({ where: condition })
       return  res.send(data);
      
    } catch (err) {
        return  res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving tutorials."
            });
        
    }
    
};

exports.findOne = async(req, res) => {
    const id = req.params.id;
    try {
       const data = await Tutorial.findByPk(id)
        if (data) {
         return  res.send(data);
        } else {
         return  res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Error retrieving Tutorial with id=" + id,
            error: err
          });
        
    }
  
    
};


exports.update = async(req, res) => {
    const id = req.params.id;

    try {
       const num = await Tutorial.update(req.body, {
            where: { id: id }
          })
            
              if (num == 1) {
               return  res.send({
                  message: "Tutorial was updated successfully."
                });
              } else {
               return  res.send({
                  message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
              }
    } catch (err) {
        return  res.status(500).json({
            message: "Error updating Tutorial with id=" + id,
            error: err
          });
        
    }
  
   
};


exports.delete = async(req, res) => {
    const id = req.params.id;

    try {
       const num = await Tutorial.destroy({
            where: { id: id }
          })
           
        console.info("Value return from delete: ", num)
        if (num == 1) {
            return res.send({
            message: "Tutorial was deleted successfully!"
        });
        } else {
        return res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Could not delete Tutorial with id=" + id, 
            error : err
          });
    }
  
    
    };

    exports.deleteAll = async (req, res) => {
        try {
            const nums = await Tutorial.destroy({
                where: {},
                truncate: false
              })
      
              return  res.send({ message: `${nums} Tutorials were deleted successfully!` });
        } catch (error) {
            return  res.status(500).json({
                message:
                  err.message || "Some error occurred while removing all tutorials."
              });
        }
       
           
         
      };

    exports.findAllPublished = async(req, res) => {
        try {
           const data = await Tutorial.findAll({ where: { published: true } })
           return  res.send(data);
        } catch (err) {
            return  res.status(500).json({
                message: err.message || "Some error occurred while retrieving tutorials."
              });
        }
        
          
      };