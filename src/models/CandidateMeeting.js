module.exports = (sequelize, DataTypes) => {
   const CandidateMeeting = sequelize.define('CandidateMeeting', {
      candidateID :  {
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
      length: {
        type: DataTypes.INTEGER,
         allowNull: false
      },
      meetingID: {
         type: DataTypes.STRING(6),
         allowNull: false,
         references: {
            model: 'Meetings',
            key: 'meetingID'
         }
      }
   });

   return CandidateMeeting;
}