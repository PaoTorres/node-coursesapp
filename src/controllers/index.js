const {getUserById, getUserCourses, createUser, updateUser,  addCourseToUser} = require('./users.controllers');
const { getAllCourses, getAllInfCourses, createCourse, updateCourse} = require('./courses.controllers');
const {createVideo, deleteVideo} = require('./videos.controllers');
const { createCategory, deleteCategory } = require('./categories.controllers');

module.exports = {
    getUserById,
    getUserCourses,
    createUser,
    updateUser,
    addCourseToUser,
    
    getAllCourses,
    getAllInfCourses,
    createCourse,
    updateCourse,

    createVideo,
    deleteVideo,

    createCategory,
    deleteCategory,

};

