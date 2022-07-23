# Marketing Website
Create a marketing website landing page and 
for a technology product.

## Description
- MERN Stack (MongoDB, Express, React & Node)
- The Frontend is the client folder using React JS
- The Backend is the server folder using Node JS

## Brief
The marketing team for the company you work for just 
launched a new product. They need a detailed marketing plan 
that includes a website and landing page dedicated to driving 
people to learn about the product and ultimately purchase it

### Get Started
In both the client & server folders, they each have their own README.md's. Make sure to read both of them before getting started on building your application.
1) To get started with building this application, you will need to `git clone https://github.com/crisner1978/marketing-website.git` this repository.

After cloning this repository on your local machine, you can set up the Client and the Server by doing the following:
2) `cd client` and run `npm install`
3) `cd server` and run `npm install`
4) Once the packages have been installed you can run the server by `cd server` then you can run `npm run dev` to start the server using nodemon.
5) To run the client, `cd client` and the run `npm start` and this will spin up the development server for the React JS application.
6) The client has been proxied to the backend. You will see in the client `package.json` file `"proxy": "http://localhost:5000/",`. This will allow you to call the backend without having to state the domain. For example you can make a 'POST' request to `/api/contact-request`

### Layout Idea
 ![marketing-website](https://user-images.githubusercontent.com/87502003/180458354-ee7fc2fc-1018-4129-a44a-e24ae2c2a1fe.png)
