/*const Users = require("./users.models");
const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Videos = require("./videos.models");
const UsersCourses = require("./usersCourses.models");
const Instructors = require("./instructors.models");*/

const { Users, Categories, Instructors, Courses, Videos, UsersCourses} = require('./index.js');

const initModels = ()=>{
    Users;
    Categories;
    Instructors;
    Courses;
    Videos;
    UsersCourses;

//a. 1 ->1  Instructor tiene la FK llamando al usuario. 
Instructors.belongsTo(Users);
Users.hasOne(Instructors);

//b.  1 ->* una categoria muchos cursos, y un curso una categoria. Cursos tiene el FK, llamando a la categoria.
Courses.belongsTo(Categories);
Categories.hasMany(Courses);

//c.  1 ->* un instructor muchos cursos y un curso un instructor. Cursos tiene el FK, llamando al instructor.
Courses.belongsTo(Instructors);
Instructors.hasMany(Courses);

//d. 1->* Un curso muchos videos, un video un curso. El video tiene la FK llamando al curso.
Videos.belongsTo(Courses);
Courses.hasMany(Videos);

//e. 1->* Un curso tiene muchos UsersCourses (inscripciones). usersCourses es el que tiene la FK que llama a los cursos.
/*UsersCourses.belongsTo(Courses);
Courses.hasMany(UsersCourses);
*/

UsersCourses.belongsTo(Courses, {as: 'inscriptions', foreignKey:'course_id' });
Courses.hasMany(UsersCourses, {foreignKey: 'course_id'});


//f. 1->* Un usuario tiene muchos UsersCourses (inscripciones). usersCourses es el que tiene la FK que llama a los usuarios.
UsersCourses.belongsTo(Users, {as:'matriculas', foreignKey:'user_id'});
Users.hasMany(UsersCourses, {foreignKey:'user_id'});

}

module.exports = initModels;
