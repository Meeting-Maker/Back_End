const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcryptjs'));

function hashPassword(user) {
    const SALT_Factor = 8;

    if (!user.changed('password'))
        return;

    return bcrypt.hash(user.password, SALT_Factor, null)
        .then(hash => {
            user.setDataValue('password', hash)
        });

}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
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
        }
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    });

    User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password);
    };


    return User;
}