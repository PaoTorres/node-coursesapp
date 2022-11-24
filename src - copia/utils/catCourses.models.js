/*const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const CatCourses = db.define("cat_courses",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            field: 'category_id',
            allowNull: false,
        },
        courseId: {
            type: DataTypes.INTEGER,
            field: 'course_id',
            allowNull: false,
        },
    }, {
    timestamps: false,
}
);
module.exports = CatCourses;*/