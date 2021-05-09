module.exports = (sequelize, DataTypes) => {
   const Comment = sequelize.define('Comment', {
      commentID :  {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      meetingID :  {
         type: DataTypes.STRING(6),
         allowNull: false,
         primaryKey: false,
         references: {
            model: 'Meetings',
            key: 'meetingID'
         }
      },
      userID: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: false,
         references: {
            model: 'Users',
            key: 'id'
         }
      },
      name: {
         type: DataTypes.STRING(40),
         allowNull: false,
         references: {
            model: 'Users',
            key: 'name'
         }
      },
      content :  {
         type: DataTypes.STRING(512),
         allowNull: false,
         primaryKey: false
      }
   });

   return Comment;
}