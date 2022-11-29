const { Router} = require("express");
const { createVideo, deleteVideo} = require('../controllers');
const router = Router();

router.post("/videos/new", createVideo);
router.post("/videos/delete/:id", deleteVideo);

module.exports = router;