const { Router} = require("express");
const { createCategories } = require('../controllers');
const router = Router();

router.post("/categories/new", createCategories);

module.exports = router;