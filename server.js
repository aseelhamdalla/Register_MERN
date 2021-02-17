//$ npm init
// npm i nodemon concurrently
// npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request
// const express = require ('express');
// const connectDB = require('./config/db');
// const app = express();
// //connect to db 
// connectDB();
// app.get('/',(req,res) => res.send('The API is running'));
// const PORT =process.env.PORT || 5000;
// app.listen(PORT ,() => console.log(`Server Started on Port ${PORT}`));

const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const members = require('./Members');

const app = express();

// app.get('/', (req, res) =>
//     res.json({msg: 'Noice'})
// );

///make path for pages 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


//make static folder here we must write .html
app.use(express.static(path.join(__dirname, 'public')));


// make middle ware
// app.use(logger);

//get all members 
// app.get('/api/members',(req,res)=>res.json(members));

// //get single member 
// app.get('/api/members/:id',(req ,res)=>{
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found){
//         res.json(members.filter(member =>member.id === parseInt(req.params.id)));
//     }else{
//         res.status(400).json({msg:`no member ${req.params.id}`});
//     }
// });




const connectDB = require('./config/db');
const mongoose = require('mongoose');
//connect Database
connectDB();
 // Init Middleware
app.use(express.json({ extended: false }));
// const userSchema = new mongoose.Schema({
//     name:{
//         required :[true , 'a user must have aname'],
//         unique:true
//     },
//     password:{
//         type:Number,
//         required :[true , 'a user must have password'],
//     }
// })


// const User = mongoose.model('User',userSchema);
// const testUser = new User({
//     name:"aseel",
//     password:"123"
// });
// testUser.save().then(doc => {
//     console.log(doc);
// })
// .catch(err => {
//     console.log('Eroor:' , err);
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Members API Routes
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/users', require('./routes/users'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/members', require('./routes/api/members'));


