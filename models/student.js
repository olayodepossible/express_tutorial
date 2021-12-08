module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
      name: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      }, 
      level: {
        type: DataTypes.INTEGER
      }
    });
  
    return Student;
  };