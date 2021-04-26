module.exports = (sequelize, DataTypes) => {
   const vote = sequelize.define('vote', {
      candidate_meeting_id :  {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         references: {
            model: 'candidate_meetings',
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
      }
   });

   return vote;
}