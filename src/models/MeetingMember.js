module.exports = (sequelize, DataTypes) => {
   const MeetingMember = sequelize.define('MeetingMember', {
      meetingID :  {
         type: DataTypes.STRING(6),
         allowNull: false,
         primaryKey: true,
         references: {
            model: 'Meetings',
            key: 'meetingID'
         }
      },
      userID: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         references: {
            model: 'Users',
            key: 'id'
         }
      },
      role: {
         type: DataTypes.INTEGER,
         defaultValue: 0
      },
   });

   return MeetingMember;
}