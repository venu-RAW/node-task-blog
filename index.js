const express = require("express");
const dotenv = require("dotenv");
const blogRoute = require("./routes/blogRoute.js");

dotenv.config({
	path: `${__dirname}/config.env`,
});

const app = express();

app.use(express.json());

// get all the blogs
app.use("/blogs", blogRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on PORT : ${process.env.PORT}`);
});
