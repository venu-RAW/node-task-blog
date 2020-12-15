const router = require("express").Router();

const { getAllBlogs, getBlogById } = require("../controller/blogController.js");

router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogById);

module.exports = router;
