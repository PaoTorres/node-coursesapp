const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const Users = db.define("users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
    hooks: {
        beforeUpdate: (user, options) => {
            console.log("Antes de ACTUALIZAR usuario**********");
            const { password } = user;
            console.log(password);
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
            console.log(hash);
        },
         beforeCreate: (user, options) => {
            console.log("Antes de crear usuario**********");
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        },
    }
});

module.exports = Users;