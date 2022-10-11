const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now


router.post("/createComment", upload.single("file"), commentsController.createComment);

router.delete("/deleteComment/:id", commentsController.deleteComment);

module.exports = router;
