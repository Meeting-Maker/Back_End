module.exports = (sequelize, DataTypes) => {
   const Meeting = sequelize.define('Meeting', {
      meetingID :  {
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
      pollType: {
         type: DataTypes.INTEGER,
         defaultValue: 0
      },
   });

   return Meeting;
}