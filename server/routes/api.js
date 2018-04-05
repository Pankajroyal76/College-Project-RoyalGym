 const express = require('express')
 const router = express.Router()
 const User=require('../models/user')


 const mongoose =  require('mongoose')
 const db ="mongodb://userpankaj:pankuxolo786@ds123799.mlab.com:23799/memberdb"
mongoose.connect(db,err =>{

    if (err){
        console.log('Eroor!'+ err)
    } else {
        console.log('Connected to mongodb')
    }
})
 router.get('/', (req, res) => {
     res.send('from API route')
 })
 router.post('/register',(req,res) => {
     let userData= req.body 
     let user = new User(userData)  
     user.save((error,registerUser) => {
         if (error){
             console.log(error)
         } else {
             res.status(200).send(registerUser);
         }
     })
 })

 router.post('/login', (req, res) => {
     let userData = req.body
     User.findOne({email:userData.email},(error,user) =>{
         if (error) {
             console.log(error)
         } else{
             if (!user){
                 res.status(401).send('Invalid Email');
             } else
             if (user.password !== userData.password){
                 res.status(401).send('Invalid Password')
             } else{
                 res.status(200).send(user)
             }
         }
     })
  
 })

 router.get('/members',(req,res) =>{
     let members =[
        { 
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          }
     ]
     res.json(members)
 })
 router.get('/special',(req,res) =>{
    let members =[
       { 
           "userId": 1,
           "id": 1,
           "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
           "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
         },
         {
           "userId": 1,
           "id": 2,
           "title": "qui est esse",
           "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
         },
         {
           "userId": 1,
           "id": 3,
           "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
           "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
         },
         {
           "userId": 1,
           "id": 4,
           "title": "eum et est occaecati",
           "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
         }
    ]
    res.json(members)
})
 module.exports = router