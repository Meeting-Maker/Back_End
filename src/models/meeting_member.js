module.exports = (sequelize, DataTypes) => {
   const meeting_member = sequelize.define('meeting_member', {
      meeting_id :  {
         type: DataTypes.STRING(6),
         allowNull: false,
         primaryKey: true,
         references: {
            model: 'meetings',
            key: 'id'
         }
      },
      user_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         references: {
            model: 'users',
            key: 'id'
         }
      },
      role: {
         type: DataTypes.INTEGER,
         defaultValue: 0
      },
   });

   return meeting_member;
}