const db = require("../utils/database");
const Users = require("./users.models");
//const {Users} = require('./index.js');
const { DataTypes } = require("sequelize");


const Instructors = db.define(
    "instructors",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: Users,
                key: "id",
            },
            field: 'user_id',
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Instructors;