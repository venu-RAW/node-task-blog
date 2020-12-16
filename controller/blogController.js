const fs = require("fs");
const path = require("path");

const blogs = path.join(__dirname, "..", "data", "blogs.json");
const blogData = JSON.parse(fs.readFileSync(blogs, "utf-8"));

// GET ALL BLOGS OR GET BLOG BY QUERY PARAMETER
const getAllBlogs = (req, res) => {
	console.log(req.query);

	if (req.query) {
		let blog = blogData.filter((blog) => {
			return Object.keys(req.query).every((key) => {
				return (
					blog[key]
						.trim()
						.replace(/[_-\s]/g, "")
						.toLowerCase() ===
					req.query[key]
						.trim()
						.replace(/[_-\s]/g, "")
						.toLowerCase()
				);
			});
		});

		if (blog < 1) {
			res.status(404).json({
				status: "Unsuccessful",
				data: "Blog not found",
			});
		}
		res.status(200).json({
			status: "Successful",
			data: blog,
		});
	} else {
		res.status(200).json({
			status: "Successful",
			data: blogData,
		});
	}
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
			status: "Blog with given id not found",
		});
	}
};

module.exports = {
	getAllBlogs,
	getBlogById,
};
