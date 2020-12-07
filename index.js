const express = require("express");
const fs = require("fs");
const path = require("path");

// instantiating the express
const app = express();

// middleware
app.use(express.json());

const PORT = 3000;
const BLOGS = path.join(__dirname, "data", "blogs.json");
const blogData = JSON.parse(fs.readFileSync(BLOGS, "utf-8"));

// get all the blogs
app.get("/blogs", (req, res) => {
	console.log(blogData);
	res.status(200).end(JSON.stringify(blogData));
});

// get the blogs passed with the id
app.get("/blogs/:id", (req, res) => {
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
});

app.listen(PORT, () => {
	console.log(`Server is listening on PORT : ${PORT}`);
});
