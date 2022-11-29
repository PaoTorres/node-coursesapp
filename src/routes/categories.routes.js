const { Router} = require("express");
const { createCategory, deleteCategory } = require('../controllers');
const router = Router();

router.post("/categories/new", createCategory);
router.post("/categories/delete/:id", deleteCategory);

module.exports = router;