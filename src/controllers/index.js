const {getUserById, createUser, updateUser, getUserCourses, addCourseToUser} = require('./users.controllers');
const { getAllCourses, getAllInfCourses, createCourse, updateCourse, createVideo} = require('./courses.controllers');
const { createCategories } = require('./categories.controllers');

//const {userRegister, getAllUsers} = require('./users.controllers');
/*
const  {userLogin} = require('./auth.controllers');
const  {getUserConversations} = require('./conversations.controllers');
const {getMessagesByConversation} = require('./messages.controllers');
*/

module.exports = {
    getUserById,
    createUser,
    updateUser,
    getUserCourses,
    addCourseToUser,
    getAllCourses,
    getAllInfCourses,
    createCourse,
    updateCourse,
    createVideo,
    createCategories,
    // userRegister,
   /* userLogin,
    getAllUsers,
    getUserConversations,
    getMessagesByConversation,*/
};

