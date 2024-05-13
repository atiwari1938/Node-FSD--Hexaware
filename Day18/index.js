const bcrypt =require('bcrypt');
const express = require('express');
const jwt=require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const User= require('./models/user.model');
const { JsonWebTokenError } = require('jsonwebtoken');

dotenv.config();

const app = express();

app.use(bodyParser.json());
const JWT_SECRET='ankittiwari';
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user with hashed password
      const newUser = await User.create({ username, email, password: hashedPassword });
  
      // Generate JWT token
      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '1h' });
  
      // Return token and user data
      res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
  
      // Return token and user data
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(500).json({ message: 'Error authenticating user' });
    }
  });
// Routes
//app.use('/auth', authRoutes);

app.listen(3002, function() { });
console.log("Server Application is started. Url : http://localhost:3002");










// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');
// const deptRouter = require('./controller/dept.controller');


// const app = express(); 
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use("/deptapi", deptRouter);


   
// app.get("/", function(req,res)  
// {   
//     res.send("API Development using Express JS");
// });


// app.post("/login", function(req,res)  
// {       
//     // verify credentials, generate the token and send the token to client
//     if(req.body.userName == "abc" && req.body.password == "abc123")
//     {
//         const userDataObj = { userName :  req.body.userName };
//         const JWTToken = jwt.sign(userDataObj, 'secret_key',  { expiresIn: '1h' });
//         return res.status(200).json({ success: true, token: JWTToken });  
//     }
//     else
//     {
//         return res.status(401).json({ success: false, message : "Invalid User Id or Password" });  
//     }
   
// });


// app.listen(3002, function() { });
// console.log("Server Application is started. Url : http://localhost:3002");