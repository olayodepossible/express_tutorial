module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("tutorial", {
     /*  id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },  */ 
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      published: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Tutorial;
  };