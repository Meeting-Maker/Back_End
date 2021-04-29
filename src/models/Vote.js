module.exports = (sequelize, DataTypes) => {
   const Vote = sequelize.define('Vote', {
      candidateID: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         references: {
            model: 'CandidateMeetings',
            key: 'candidateID'
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
      }
   });

   return Vote;
}