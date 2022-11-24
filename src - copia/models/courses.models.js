const db = require("../utils/database");
const { DataTypes } = require("sequelize");
//const {Categories, Instructors} = require('./index.js');
const Instructors = require("./instructors.models");
const Categories = require("./categories.models");

const Courses = db.define("courses",
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: Instructors,
                key: "id"
            },
            field: 'instructor_id',
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Categories,
                key: "id"
            },
            field: 'category_id',
        }
    }
);

module.exports = Courses;