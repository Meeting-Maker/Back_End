module.exports = (sequelize, DataTypes) => {
   const candidate_meeting = sequelize.define('candidate_meeting', {
      id :  {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      start: {
         type: DataTypes.STRING(19),
         allowNull: false
      },
      end: {
         type: DataTypes.STRING(19),
         allowNull: false
      },
      meeting_id: {
         type: DataTypes.STRING(6),
         allowNull: false,
         references: {
            model: 'meetings',
            key: 'id'
         }
      }
   });

   return candidate_meeting;
}