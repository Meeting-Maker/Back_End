module.exports = (sequelize, DataTypes) => {
   const meeting = sequelize.define('meeting', {
      id :  {
         type: DataTypes.STRING(6),
         allowNull: false,
         primaryKey: true
      },
      title: {
         type: DataTypes.STRING(50),
         allowNull: false
      },
      description: {
         type: DataTypes.STRING(256)
      },
      poll_type: {
         type: DataTypes.INTEGER,
         defaultValue: 0
      },
   });

   return meeting;
}