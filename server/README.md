# Backend for Marketing Website
The backend is being powered by Node JS. Express is being used to create the Server and API routes. For the database, we have MongoDB being connected by Mongoose.

### Get Started:
1) You will need [MONGODB to Get Started](https://www.mongodb.com/)
2) Once you have setup your account, you will need to convert the `.env.example` file into `.env` and then place your MONGODB connection string in the MONGODB_URI variable like so
```
MONGODB_URI=your_mongodb_connection_string_goes_here
```
Make sure that you add your password in the spot where you see `<password>`

3) All the routes are located in the `routes.js` file. 
```
const express = require('express')

module.exports = function getRoutes() {
  const router = express.Router();

  router.post('/contact-request', createContactRequest)
  
  return router;
}

// Create Post to MONGODB database
async function createContactRequest(req, res) {
  
}
```
You will need to complete the logic for the post request to handle any user requests for information about your product. Feel free to add more routes as you see fit.

4) The backend could also serve the data you need for your frontend. For example, prodcut information to include images and text could be stored in MongoDB. Then you can make a `GET` request from your frontend to get that data to display in your React application.