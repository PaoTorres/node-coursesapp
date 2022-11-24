const {getUserById, createUser, updateUser, getUserCourses} = require('./users.controllers');

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
   // userRegister,
   /* userLogin,
    getAllUsers,
    getUserConversations,
    getMessagesByConversation,*/
};