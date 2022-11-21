const db = require("../utils/database");
const { DataTypes } = require("sequelize");
//const {Courses} = require('./index.js')
const Courses = require("./courses.models");

const Videos = db.define("videos",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Courses,
                key: "id"
            },
            field: 'course_id'
        }
    },{
        timestamps: false,
    }
);

module.exports = Videos;