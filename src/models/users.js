module.exports = (sequelize, DataTypes) => {
   const user = sequelize.define('user', {
      id :  {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING(40),
         allowNull: false
      },
      email: {
        type: DataTypes.STRING(254)
      },
      password: {
         type: DataTypes.STRING(60)
      },
      guest: {
         type: DataTypes.TINYINT(),
         defaultValue: 1
      },
   });

   return user;
}