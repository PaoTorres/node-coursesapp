const { Router} = require("express");
const { getUserById, createUser, updateUser, getUserCourses} = require('../controllers');
const router = Router();

//router.post('/users', userRegister);
//router.get("/users", authenticate, getAllUsers);

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUserCourses);
router.post("/users/new", createUser);
router.put("/users/:id", updateUser); 

module.exports = router;