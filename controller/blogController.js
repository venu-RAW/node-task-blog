const fs = require("fs");
const path = require("path");

const blogs = path.join(__dirname, "..", "data", "blogs.json");
const blogData = JSON.parse(fs.readFileSync(blogs, "utf-8"));

const getAllBlogs = (req, res) => {
	console.log(blogData);
	res.status(200).json({
		status: "successful",
		data: blogData,
	});
};

const getBlogById = (req, res) => {
	let blog = blogData.find((blog) => {
		return blog.id === req.params.id;
	});

	if (blog) {
		res.status(200).json({
			status: "Successful",
			data: blog,
		});
	} else {
		res.status(200).json({
			status: "Blog not found",
		});
	}
};

module.exports = {
	getAllBlogs,
	getBlogById,
};
