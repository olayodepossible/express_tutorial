module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("student", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },  
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