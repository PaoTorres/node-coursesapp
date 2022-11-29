const {Router } = require("express");
const { getAllCourses, getAllInfCourses, createCourse, updateCourse, createVideo} = require("../Controllers");
const router = Router();

router.get("/courses", getAllCourses);
router.get("/courses/allinf", getAllInfCourses);
router.post("/courses/new", createCourse);
router.put("/courses/:id", updateCourse);

module.exports = router;