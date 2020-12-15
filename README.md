# node-task-blog

-> This is simple node application use to retreive all the blogs data from the json file and also we can get specific blog by using the id.
-> This application contains the read operations by using the core node module (i.e. "fs").
-> Also used other core module (i.e. "path") module to get the absolute path of the blogs.json file.

---

# To run and use this repository do the following things:

QUICK NOTE: The current working directory (i.e. cwd) should always be the root directory while doing the below mentiooned steps.

1. First make the empty folder and open the folder in the terminal and clone this repository by using the folowing command :-

   git clone https://github.com/venu-RAW/node-task-blog.git

2. After cloning the repository use the following command to install all the dependencies this repo use

   npm install

3. After installing the dependencies you need to create a new file named as ( config.env ) in the root folder. You can get the detailed description about this in the ( sample.config.env ) file, that I have created for your reference.

4. After doing the above steps run the application server by using the following command :-

   node index.js

5. Then you need to open the POSTMAN, if you dont know what the POSTMAN is it is basically a S/W application which helps us to test the Rest API's.

6. Click on Add request to make a request to the server.

7. Now to test the blogs data there are 2 request you need to perform

   7.A. To get all the blogs

   http://localhost:3000/blogs/

   Note: Replace the Port 3000 with your port number and make the request.

   7.B. To get the blog specific to the id.

   http://localhost:3000/blogs/4

   Note: 4 is the id of the blog with the specific id.

8. Thats it.

# Languages and tools used

-  JavaScript
-  Nodejs
-  Express
-  POSTMAN
-  Git and Github
